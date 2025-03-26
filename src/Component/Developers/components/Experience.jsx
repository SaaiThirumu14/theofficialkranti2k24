import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";

const neonGlow = {
  boxShadow: "0 0 15px #00f0ff",
  border: "1px solid #00f0ff",
};

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(0, 0, 0, 0.8)",
        color: "#00f0ff",
        ...neonGlow,
      }}
      contentArrowStyle={{ borderRight: "7px solid #00f0ff" }}
      date={experience.date}
      dateClassName="neon-date"
      iconStyle={{
        background: "#0f0f0f",
        boxShadow: "0 0 15px #00f0ff",
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[70%] h-[70%] object-contain neon-icon'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-[24px] font-bold text-[#00f0ff]'>{experience.title}</h3>
        <p className='text-[#80e0ff] text-[20px] font-semibold' style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-[#d0faff] text-[18px] pl-1 tracking-wide'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <p className={`${styles.sectionSubText} text-center text-[#00f0ff]`}>
        Outstanding Leadership
      </p>
      <h2 className={`${styles.sectionHeadText} text-center text-[#00f0ff]`}>
        Coordinators
      </h2>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
