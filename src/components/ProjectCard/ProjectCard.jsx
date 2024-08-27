"use client";
import { useState } from "react";
import Link from "next/link";
import { FaStar, FaRegStar } from "react-icons/fa";
import { GiDamagedHouse } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";

const ProjectCard = ({ index = 0, project = null }) => {
  const [isStar, setIsStar] = useState(false);
  const bgColorsPallete = [
    "from-blue-600 to-purple-800",
    "from-yellow-500 to-orange-700",
    "from-lime-500 to-emerald-700",
    "from-slate-500 to-slate-700",
    "from-pink-500 to-rose-600",
    "from-teal-500 to-teal-700",
  ];
  const pickAnColor = (index) => {
    const arrayLength = bgColorsPallete.length;
    const cyclicIndex = index % arrayLength;
    return bgColorsPallete[cyclicIndex];
  };
  const toggleStarHandle = () => {
    setIsStar(!isStar);
  };

  return (
    <>
      {project && (
        <div
          key={index}
          className={`h-[100px] grid px-3 py-2 rounded-lg bg-gradient-to-bl
            ${pickAnColor(index)}`}
        >
          <Link className="flex flex-col justify-between" href="#">
            <div>{project.name}</div>
            <div className="flex justify-between">
              <div className="opacity-80">
                {project.type == "renovation" && <GiDamagedHouse />}
                {project.type == "construct" && <GrUserWorker />}
              </div>
              <span
                className="hover:scale-125 transition-all"
                onClick={toggleStarHandle}
              >
                {!isStar && <FaRegStar />}
                {isStar && <FaStar className="text-yellow-300" />}
              </span>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
