import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>

      {/* tab */}
      <motion.div  
            whileInView={{opacity:1 , x:0}} 
            initial={{opacity:0 , x:-100}} 
            transition={{duration:1}} 
            className="w-full">
          <div className="flex justify-center">
            <ul className="menu  menu-horizontal bg-base-200 rounded-box">
              <li>  <Link to=''  > MERN  </Link>  </li>
              <li> <Link to='/reactjs'  >  React  </Link> </li>
              <li>  <Link to='/psd'  >  PSD to HTML  </Link> </li>
              <li> <Link to='/academic'  > Academic  </Link>  </li>
            </ul>
          </div>
      </motion.div>
      
      <Outlet></Outlet>
    </div>
  );
};

export default Projects;
