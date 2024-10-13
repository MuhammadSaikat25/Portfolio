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
          I am MERN stack developer with a strong focus on front-end
          development, specializing in crafting engaging user interfaces using
          React. Your expertise lies in building dynamic, responsive, and
          user-friendly applications, where you leverage tools like JavaScript,
          HTML, CSS, and frameworks such as Bootstrap, Material-UI, or Tailwind
          CSS. You excel in managing state with Redux or Context API, and you're
          adept at integrating front-end components with back-end APIs,
          typically using Node.js and Express for data handling. While your
          primary focus is on the client side, you have a solid understanding of
          MongoDB and the back-end environment, which helps you collaborate
          effectively with full-stack and back-end developers. Your role is
          crucial in delivering seamless and intuitive user experiences.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
