import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";

const Container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const handleContact = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=asawom250@gmail.com",
      "_blank"
    );
  };

  return (
    <div className="w-full font-roboto  border-b border-neutral-800 pb-16 lg:mb-10 min-h-screen flex items-center justify-center">
      <div className="flex flex-wrap w-full">
        <div className="w-full md:w-1/2 mx-auto">
          <div className="flex flex-col items-start md:items-start lg:items-start">
            <motion.h1
              variants={Container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 tracking-tight lg:mt-16 "
            >
              <p className="mb-2 flex mt-4  ">
                {/* <img src={hand} className="hand " alt="" /> */}
                <span className=" lg:text-5xl font-bold md:text-4xl text-3xl">
                  HELLO,
                </span>
              </p>
              <p className="mb-2 lg:text-5xl font-bold md:text-4xl text-3xl ">
                I AM Web Developer | MERN Stack Specialist
              </p>
            </motion.h1>
            <motion.p
              variants={Container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 mb-6 tracking-tighter w-100"
            >
              {HERO_CONTENT}
            </motion.p>
            <div className="flex gap-5">
              <button
                onClick={handleContact}
                className="bg-cyan-600 text-white py-2 px-6 rounded-lg  transition duration-300"
              >
                Contact Me
              </button>
              {/* cv */}
              <a
                href="https://drive.google.com/drive/folders/1WrgvylSegU2FVo7V-4krsW2CY_Hemhub?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-600 text-white py-2 px-6 rounded-lg  transition duration-300"
              >
                My CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
