"use client";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useState } from "react";

const ProjectBoards = () => {
  const [projects, setProjects] = useState([
    { name: "پاسداران 3", type: "construct" },
    { name: "برج سرخرود 35 طبقه", type: "renovation" },
    { name: "برج سرخرود 35 طبقه", type: "renovation" },
    { name: "برج سرخرود 35 طبقه", type: "renovation" },
    { name: "برج سرخرود 35 طبقه", type: "construct" },
    { name: "برج سرخرود 35 طبقه", type: "renovation" },
    { name: "برج سرخرود 35 طبقه", type: "construct" },
    { name: "برج سرخرود 35 طبقه", type: "construct" },
    { name: "برج سرخرود 35 طبقه", type: "renovation" },
    { name: "برج سرخرود 35 طبقه", type: "construct" },
    { name: "برج سرخرود 35 طبقه", type: "construct" },
  ]);
  return (
    <>
      {projects && (
        <div className="flex flex-wrap text-white gap-2 px-3 py-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} project={project} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProjectBoards;
