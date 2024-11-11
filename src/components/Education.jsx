import { motion } from "framer-motion";
import React from "react";
import "../css/album.css";
import icpc from "../images/others/icpc.jpg";
import uap from "../images/others/uap.jpg";
import uap2 from "../images/others/uap2.jpg";
import icpc2 from "../images/others/usicpc.jpg";
import dc from "../images/others/dc.jpg";
import chm from "../images/others/chm.jpg";
import skl from "../images/others/skl.jpg";

const Education = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 px-5">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h2>

      {/* 1st uap*/}
      <div className="grid lg:grid-cols-2 gap-5  md:grid-cols-2 grid-cols-1">
        {/* 1st imgs*/}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full flex justify-center"
        >
          <div className="album-container">
            <div className="img-holder">
              <img src={uap} alt="Image 1" />
            </div>
            <div className="img-holder">
              <img src={uap2} alt="Image 1" />
            </div>
            <div className="img-holder">
              <img src={icpc} alt="Image 1" />
            </div>
            <div className="img-holder">
              <img src={icpc2} alt="Image 2" />
            </div>
          </div>
        </motion.div>
        {/* 2nd */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full "
        >
          <div className="mb-4 ">
            <div>
              <h1 className="text-3xl font-bold">University of Asia Pacific</h1>
              <br />
              <h1 className="text-2xl font-semibold">
                Bachelor of Science in Computer Science and Engineering
              </h1>
              <br />
              <p className="text-xl"> Passing year: 2023 </p>
              
            </div>
          </div>
        </motion.div>
      </div>

      {/* 2nd DC*/}
      <div className="grid my-20 lg:grid-cols-2 gap-5  md:grid-cols-2 grid-cols-1">
        {/* 1st paragraph*/}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full "
        >
          <div className="mb-4 ">
            <div>
              <h1 className="text-3xl font-bold">Dhaka College</h1>
              <br />
              <h1 className="text-2xl font-semibold">
                Higher Secondary School Certificate
              </h1>
              <br />
              <p className="text-xl"> Group: Science </p>
              <br />
              <p className="text-xl"> Passing year: 2016 </p>
            </div>
          </div>
        </motion.div>

        {/* 2nd */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full flex justify-center"
        >
          <div className="album-container">
            <div className="img-holder">
              <img src={dc} alt="Image 1" />
            </div>
            <div className="img-holder">
              <img src={chm} alt="Image 2" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3rd model skl */}
      <div className="grid lg:grid-cols-2 gap-5  md:grid-cols-2 grid-cols-1">
        {/* 1st imgs*/}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full flex justify-center"
        >
          <img src={skl} style={{ width: "90%" }} alt="Image 1" />
        </motion.div>
        {/* 2nd */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full "
        >
          <div className="mb-4 ">
            <div>
              <h1 className="text-3xl font-bold">Motijheel Model High School and College</h1>
              <br />
              <h1 className="text-2xl font-semibold">
                Secondary School Certificate
              </h1>
              <br />
              <p className="text-xl"> Group: Science </p>
              <br />
              <p className="text-xl"> Passing year: 2014 </p>
              
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
