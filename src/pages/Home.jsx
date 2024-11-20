import React from "react";
import Button from "../components/Button";
import { MdArrowRight, MdSettings } from "react-icons/md";
import profileImg from "../assets/profile-black.webp";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

// const profileImg= false;
// const profileImg = React.lazy(import("../assets/profile-black.webp"));

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("about");
  };

  return (
    <div className=" h-full overflow-y-auto overflow-x-hidden">
      <div className="h-14 w-14 rounded-tr-md rounded-br-md bg-white text-slate-600 fixed left-0 top-1/3 md:top-1/2 -translate-y-1/2 flex justify-center items-center z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <MdSettings size={34} />
        </motion.div>
      </div>
      <div className="flex h-full flex-col lg:flex-row">
        <div className="bg-light-primary  h-full w-full clip-custom absolute top-0 left-0 -z-[1]"></div>
        <div className="bg-white dark:bg-dark-primary h-full w-full absolute top-0 left-0 -z-[2]"></div>
        <div className="md:h-full lg:w-1/2 my-10 lg:my-0  transition-all duration-500">
          <div className="lg:w-4/5 h-full rounded-md  flex justify-center items-center">
            <div className="w-3/4 sm:w-2/4 md:w-2/5 lg:w-3/4 relative shadow-lg shadow-black overflow-hidden rounded-3xl">
              {profileImg ? (
                <img
                  src={profileImg}
                  alt="profile"
                  className=" w-full   object-top  transform transition-transform duration-300 scale-[1.5]  translate-y-[6rem] lg:translate-y-[7rem] xl:translate-y-[7.5rem] translate-x-4"
                  loading="lazy"
                />
              ) : (
                <div className="h-80 w-full skeleton" />
              )}
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 px-5 py-10 lg:p-0 bg-white dark:bg-dark-primary text-dark-primary dark:text-white">
          <div className="h-full w-full md:w-4/5  flex flex-col justify-center  space-y-10 md:mx-5 ps-3 md:px-0">
            <motion.h1
              animate={{ x: 0 }}
              initial={{ x: 200 }}
              transition={{ duration: 0.9 }}
              className="text-[1.67rem] md:text-5xl ms-3 font-bold uppercase relative leading-[3rem] md:leading-[4rem] text-light-primary text-shadow"
            >
              <span className="absolute -left-8 top-6 h-1 w-4 rounded bg-light-primary "></span>
              I'm Sivamani N.
              <br />
              <span className="text-light-secondary dark:text-white  ">
                Full Stack Developer
              </span>
            </motion.h1>
            <motion.p
              animate={{ x: 0 }}
              initial={{ x: 200 }}
              transition={{ duration: 0.9 }}
              className="text-[16px] md:text-[17px] tracking-wide leading-8 md:leading-10 "
            >
              I am a full stack developer with 3 years of experience,
              specializing in React, Node.js, Express, and MySQL. I’m passionate
              about building dynamic, user-friendly applications and solving
              complex problems to deliver efficient, scalable solutions.
            </motion.p>

            <motion.div
              animate={{ x: 0 }}
              initial={{ x: 200 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <Button
                title="More About Me"
                classes="uppercase"
                icon={MdArrowRight}
                onClick={handleClick}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
