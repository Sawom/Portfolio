import { motion } from "framer-motion";


const Projects = () => {
  return (
    <div className=" pb-4">
        <motion.h1 
         whileInView={{opacity:1 , y:0}} 
         initial={{opacity:0 , y:-100}} 
         transition={{duration:0.5}}
        className="my-20 text-center text-4xl">Projects</motion.h1>
        <div>
            


        </div>
    </div>
  )
}

export default Projects