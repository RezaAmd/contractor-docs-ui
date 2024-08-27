"use client";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useState } from "react";

const ProjectBoards = ({ className = null }) => {
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
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 text-white ` + className}>
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} project={project} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProjectBoards;
