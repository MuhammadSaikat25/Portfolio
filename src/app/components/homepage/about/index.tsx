// @flow strict

import Image from "next/image";
import img from "../../../../../public/ava.webp";
import "./about.css";
function AboutSection() {
  return (
    <div className="team-section flex items-start lg:pt-16 justify-between">
      <div className="team-container lg:w-[30%]">
        <div
          className="random-image"
          style={{ opacity: 1, transition: "opacity 1s ease" }}
        >
          <i className="b1"></i>
          <i className="b2"></i>
          <i className="b3"></i>
          <Image
            src={img}
            width={200}
            height={200}
            alt="Saikat"
            className="rounded-lg transition-all duration-700 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
      <div className="lg:w-[70%]">
        <p className="text-[#EC4899] text-2xl py-2">Who I am?</p>
        <p className="text-gray-300">
        I'm a MERN stack developer specializing in front-end development with React. I build dynamic, responsive, and user-friendly interfaces using JavaScript, HTML, CSS, and frameworks like Bootstrap, Material-UI, and Tailwind CSS. I'm skilled in managing state with Redux or Context API and adept at integrating front-end components with back-end APIs, using Node.js and Express for data handling. While I focus on client-side development, I have a solid understanding of MongoDB and back-end environments, enabling effective collaboration with full-stack and back-end teams to deliver seamless user experiences.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
