import React from "react";
import Button from "../components/Button";
import { MdArrowRight, MdSettings } from "react-icons/md";
import profileImg from "../assets/profile-2.jpg";

function Home() {
  return (
    <div className="h-full relative">
      <div className="h-14 w-14 rounded-tr-md rounded-br-md bg-white text-slate-600 fixed left-0 top-1/3 md:top-1/2 -translate-y-1/2 flex justify-center items-center z-10">
        <MdSettings size={34} className="animate-spin" />
      </div>
      <div className="flex h-full flex-col lg:flex-row">
        <div className="bg-light-primary  h-full w-full clip-custom absolute top-0 left-0 -z-[1]"></div>
        <div className="bg-white dark:bg-dark-primary h-full w-full absolute top-0 left-0 -z-[2]"></div>
        <div className="md:h-full lg:w-1/2 ">
          <div className="lg:w-4/5 h-full rounded-md  flex justify-center items-center">
            <div className="w-3/4 relative">
              <img
                src={profileImg}
                alt="profile"
                className="w-full rounded-md object-fill object-top shadow-lg shadow-black"
              />
              <div className="bg-white dark:bg-light-primary opacity-50 h-full w-full absolute top-0 right-0 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 p-10 lg:p-0 bg-white dark:bg-dark-primary text-dark-primary dark:text-white  ">
          <div className="h-full w-4/5  flex flex-col justify-center  space-y-10">
            <h1 className="text-3xl md:text-5xl  font-bold uppercase relative leading-[3rem] md:leading-[4rem] text-light-primary">
              <span className="absolute -left-8 top-6 h-1 w-4 rounded bg-light-primary "></span>
              I'm Sivamani N.
              <br />
              <span className="text-light-secondary dark:text-white  ">Full Stack Developer</span>
            </h1>
            <p className="text-[17px] tracking-wide leading-8 md:leading-10 ">
              I am a full stack developer with 3 years of experience,
              specializing in React, Node.js, Express, and MySQL. I’m passionate
              about building dynamic, user-friendly applications and solving
              complex problems to deliver efficient, scalable solutions.
            </p>

            <Button
              title="More About Me"
              classes="uppercase"
              icon={MdArrowRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
