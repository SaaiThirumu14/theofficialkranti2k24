import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-black bg-opacity-70 p-5 rounded-2xl sm:w-[360px] w-full relative border border-[#00f0ff] shadow-[0_0_20px_#00f0ff]"
    >
      {/* Circular Image */}
      <div className="flex justify-center items-center">
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden flex justify-center items-center border-4 border-[#00f0ff] shadow-[0_0_12px_#00f0ff]">
          <img src={image} alt="project_image" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* GitHub Icon */}
     {   /* <div className="absolute top-3 right-3">
        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-[#00f0ff] shadow-[0_0_10px_#00f0ff] hover:scale-110 transition-transform duration-200"
        >
          <img src={github} alt="source code" className="w-6 h-6 object-contain" />
        </div>
      </div>*/   }

      {/* Project Details */}
      <div className="mt-5 text-center">
        <h3 className="text-[#00f0ff] font-bold text-[24px] drop-shadow-[0_0_5px_#00f0ff]">
          {name}
        </h3>
        <p className="mt-2 text-[#aeeeff] text-[14px]">{description}</p>
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {tags.map((tag) => (
          <p
          key={`${name}-${tag.name}`}
          className={`text-[14px] drop-shadow-[0_0_3px_#00f0ff] ${
            tag.color === "blue" ? "text-blue-400" :
            tag.color === "pink" ? "text-pink-400" :
            tag.color === "darkblue" ? "text-blue-900" : "text-white"
          }`}
        >
          #{tag.name}
        </p>
        ))}
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-[#fa2ec0] drop-shadow-[0_0_5px_#00f0ff]`}>
          Timeparadox
        </p>
        <h2 className={`${styles.sectionHeadText} text-[#00f0ff] drop-shadow-[0_0_8px_#00f0ff]`}>
          Developers
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[#aeeeff] text-[17px] max-w-3xl leading-[30px]"
        >
          {/* Optional intro or description here */}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
