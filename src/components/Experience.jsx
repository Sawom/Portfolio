import { motion } from "framer-motion";
import dnet from "../images/others/dnet.jpg";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>

      {/* 1st work */}
      <div className="grid lg:grid-cols-2 gap-5  md:grid-cols-2">
        {/* 1st imgs*/}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/4"
        >
          <img src={dnet} style={{ width: "100%" }} alt="Image 1" />
        </motion.div>
        {/* 2nd */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <p className="mb-4 ">
            <div>
              <h1 className="text-2xl font-bold">Dnet</h1>
              <h1 className="text-xl font-semibold">
                Junior Web Developer (Frontend)
              </h1>
              <br />
              <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                <li>
                  Front-end Design & Development with HTML, CSS, JS, Bootstrap,
                  Tailwind-CSS, React.
                </li>
                <li>
                  Figma to web design. Website Bug Solve, Update previous
                  project.
                </li>
              </ul>
            </div>
          </p>
        </motion.div>
      </div>

      {/* 2nd work */}


    </div>
  );
};

export default Experience;
