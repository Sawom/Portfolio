import { motion } from "framer-motion";
import dnet from "../images/others/dnet.jpg";
import desk from "../images/others/desk.jpeg";

const Experience = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>

      {/* 1st work dnet*/}
      <div className="grid lg:grid-cols-2 gap-5  md:grid-cols-2">
        {/* 1st imgs*/}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full flex justify-center"
        >
          <img src={dnet} style={{ width: "90%" }} alt="Image 1" />
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
              <h1 className="text-3xl font-bold">Dnet</h1>
              <h1 className="text-2xl font-semibold">
                Junior Web Developer (Frontend)
              </h1>
              <br />
              <ul className="text-xl" style={{ listStyleType: "disc", paddingLeft: "20px" }}>
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
          </div>
        </motion.div>
      </div>

      {/* 2nd work fifo*/}
      <div className="grid my-20 lg:grid-cols-2 gap-5  md:grid-cols-2">
        {/* 1st paragraph*/}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full "
        >
          <div className="mb-4 ">
            <div>
              <h1 className="text-3xl font-bold">FIFOTech</h1>
              <h1 className="text-2xl font-semibold">Intern Web Developer</h1>
              <br />
              <ul className="text-xl" style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                <li>Experienced in how IT works in the BPO industry.</li>
                <li>Contributed to web design and development.</li>
              </ul>
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
          <img src={desk} style={{ width: "90%" }} alt="Image 1" />
        </motion.div>
      </div>
      
    </div>
  );
};

export default Experience;
