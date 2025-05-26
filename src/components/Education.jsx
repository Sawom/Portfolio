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
import { EDUCATION } from "../constants";

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

      <section className="py-12 px-6 text-white">
        <div className="space-y-10">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="border-l-[1px] border-cyan-400 pl-6">
              <h3 className="text-2xl font-medium">{edu.degree}</h3>
              <p className="text-lg text-cyan-400">{edu.institution}</p>
              <p className="text-lg text-gray-400">{edu.date}</p>
            </div>
          ))}
        </div>
      </section>




    </div>
  );
};

export default Education;
