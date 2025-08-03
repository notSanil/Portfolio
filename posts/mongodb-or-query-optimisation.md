---
date: 03-07-2025
description: The unintuitive way MongoDB optimises $or queries, and why you should care.
title: Understanding MongoDB's $or queries
---
This article is the first of a new series I am writing to explore some of the weird quirks of MongoDB, and how to use them to squeeze all performance out of it. All of these things are/will be related to some interesting behaviour I have seen whilst working on a production Mongo instance at my work where we use a self hosted MongoDB instance as our primary database.

# Index
So before we begin diving into how 'or' queries are optimised, we must first learn about indexes. Let's imagine you have a large list of items. How would you go about finding something in that list? You could take the simple approach of scanning each item in that list and figuring out if it's the item that you want or not, but this is slow. This is strategy has a time complexity of `O(n)`, which by itself is not particularly bad, but when you remember that some of this list is stored on very slow secondary memory, this **collection scan** strategy becomes very slow. 

The other, much more optimised way is to create and use indexes. Indexes are created using **B-trees** which are data structures that are specifically created in a way that the number of disk reads stay as low as possible. There's a few more ways that they are tuned to ensure optimal performance, but all we care about is that this **index scan** method is **orders of magnitude faster** than a simple **collection scan**. To give evidence, on our production database, containing about 1 million documents in a collection, a collection scan takes about 3-3.5 seconds to complete, whereas an index scan completes in *~20 milliseconds* (computers are pretty darn fast!). This is a speedup of about 175x.

It is worth noting that indices are not free of cost. The more indexes you have on a collection, the slower an insert into the collection becomes, but as a general rule, the speed gained in reads significantly outweighs the slowdowns lost to writes.
# Or queries
With the knowledge of indexes, it becomes pretty obvious to use indexes wherever possible. You might be tempted to index each and every parameter of each collection, but at that point, the slowdown *does* becomes significant enough to warrant removing some indices. So it is always a balancing act between having too many and too little indices. 

Now coming to or queries, let's say that you have a query that runs on two separate fields in a collection. Let's assume a student collection, where you want to find the students whose email is `abc.xyz@uni.edu`, **or** whose mobile number is **817311**. You would write this query, something as follows: `db.students.find({$or: [{"email": "abc.xyz@uni.edu"}, {"mobile": "817311"}]})`. This is fairly common pattern when you want to run a multi search over a collection. 

Now here comes the unusual part, how do you think Mongo will evaluate this query? If there are no indexes defined on any of the fields, Mongo has no choice but to do a full *collection scan* on the collection to find the documents, but what if I have defined an index over the `mobile` field of the collection?

This is where things get a little murky. MongoDB (like most databases) evaluates a bunch of execution plans while choosing how to execute a query. If the query is not very selective, and Mongo **thinks** that it might return a large[1] number of documents, then it might choose to do a full *collection scan* even if the field is indexed. It all depends on the **selectiveness** of the index. Index selectiveness is how tightly an index can help narrow down the search space. The more selective an index, the more documents it can eliminate.

If using the index does not reduce the search space significantly, then mongo *will* do a collection scan. This is because, mongo will have to do a collection scan for `email` anyway, and since the index of `mobile` will not reduce the number of documents we have to look through a lot, it will be faster to just evaluate both conditions while going over the whole collection.

However, the real speed comes from when you define indexes on **both** the fields. Now Mongo can go absolutely nuts, and run two separate queries; one for finding the matching emails, and one for matching the mobile. Both these queries will run extremely quickly (I'm talking orders of milliseconds). Mongo will then join the results of these two queries, and return the matching documents. Overall, this query will run incredibly fast, only taking a few milliseconds even on large collections. 

Another benefit that you will see from this optimisation is that the CPU usage while running this query will significantly drop. Adding similar indexes on our production database helped bring down the average CPU usage from about 40%, to 5%, *instantly!*

# A caveat
While you will definitely see an increase in performance by adding additional indexes, it is worth noting that indexes can only really be effective if the data is actually properly indexable. What I mean by that is that if for some reason, all the emails or the mobiles in the collection, are the exact same, then indexes won't actually do much. The real power of indexes comes when you can divide the data into successively smaller chunks based on some ordering of the data. 

This is of course a very unusual case, since why would you be querying some data if its all the same anyway, and stuff like the email or mobile is rarely (if ever) the same between two people.

---

[1] I have purposefully not used a concrete number here since it is hard to say how the query planner will calculate this. If you are struggling with this, using the `explain()` function on your query will help you understand how the planner is evaluating your query.