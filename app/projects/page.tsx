import Navbar, { Pages } from "../Components/Navbar";
import Project, { Direction } from "../Components/Project";
import acmImage from "@/public/ACMWebsite.png";
import codeZone from "@/public/CodeZone.png";
import sage from "@/public/Sage.png";
import mapGen from "@/public/MapGen.png";

export default function Projects() {
  return (
    <main>
      <Navbar page={Pages.Projects} />

      <div className="relative h-fit bg-primary">
        <h1 className="relative text-center text-6xl mb-10 pt-4 text-zinc-100">
          My Projects
        </h1>

        <Project
          name="PEC ACM Website"
          description="A website for the Computer Science Society of PEC. Handled the back-end component of the website."
          link="https://www.pecacm.com/"
          image={acmImage}
          direction={Direction.Left}
        />

        <Project
          name="CodeZone"
          description="An ML powered competitive programming platform that helps you to improve while having fun."
          link="https://github.com/notSanil/CodeZone"
          image={codeZone}
          direction={Direction.Right}
        />
        <Project
          name="SAGE 2D"
          description="A game engine written using OpenGL and SDL. Contains an ECS, scripting engine & a visual editor."
          link="https://github.com/notSanil/SAGE2D"
          image={sage}
          direction={Direction.Left}
        />
        <Project
          name="Map Generator"
          description="A map generator made using perlin noise, and voronoi diagrams."
          link="https://github.com/notSanil/Map-Generation"
          image={mapGen}
          direction={Direction.Right}
        />
      </div>
    </main>
  );
}
