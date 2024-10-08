import React from "react";
import Button from "../components/Button";
import { MdArrowRight, MdSettings } from "react-icons/md";
import profileImg from "../assets/profile-2.jpg";

function Home() {
  return (
    <div className="h-full relative">
      <div className="h-14 w-14 rounded-tr-md rounded-br-md bg-white text-slate-600 fixed left-0 top-1/2 -translate-y-1/2 flex justify-center items-center">
        <MdSettings size={34} className="animate-spin " />
      </div>
      <div className="bg-primary h-full w-full clip-custom absolute top-0 left-0 -z-10"></div>
      <div className="flex h-full ">
        <div className="p-20  h-full w-1/2">
          <div className="w-4/5 h-full rounded-md shadow-lg shadow-black bg-amber-100">
            <img
              src={profileImg}
              alt="profile"
              className=" w-full h-full rounded-md object-fill object-top mix-blend-multiply"
            />
          </div>
        </div>
        <div className="w-1/2">
          <div className="h-full w-4/5  flex flex-col justify-center  space-y-10">
            <h1 className="text-5xl text-primary font-bold uppercase relative leading-snug">
              <span className="absolute -left-8 top-6 h-1 w-4 rounded bg-primary"></span>
              I'm Sivamani N.
              <br />
              <span className="text-white">Full Stack Developer</span>
            </h1>
            <p className="text-[17px] tracking-wide leading-10 ">
              I am a full stack developer with 3 years of experience,
              specializing in React, Node.js, Express, and MySQL. I’m passionate
              about building dynamic, user-friendly applications and solving
              complex problems to deliver efficient, scalable solutions.
            </p>

            <Button
              title="More About Me"
              classes="uppercase"
              icon={MdArrowRight}
              iconRight
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
