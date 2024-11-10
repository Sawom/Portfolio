import { FaNodeJs,FaHtml5,FaFigma,FaPython,FaJsSquare,FaBootstrap,FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill, RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiDaisyui,SiMongodb,SiMysql,SiTypescript, SiFirebase } from "react-icons/si";
import { TbBrandCpp, TbSquareLetterCFilled  } from "react-icons/tb";
import { motion } from "framer-motion";


const iconvarriant = (duration) =>({
    initial:{y:-10},
    animate:{
        y : [10 , -10],
        transition:{
            duration: duration,
            ease:"linear",
            repeat: Infinity,
            repeatType:"reverse"
        },
    },
});

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
            whileInView={{opacity:1 , y:0}} 
            initial={{opacity:0 , y:-100}} 
            transition={{duration:1.5}}
        className="my-10 text-center text-4xl">Technologies</motion.h2>
        <div className="flex flex-wrap items-center justify-center gap-6">
            <motion.div  variants={iconvarriant(5)} animate="animate" initial="initial" className="rounded-2xl text-center border-4 p-4 border-neutral-800">
                <FaHtml5 className="text-7xl text-orange-500" />
                HTML
            </motion.div>
            <motion.div variants={iconvarriant(2)} animate="animate" initial="initial" className="rounded-2xl text-center border-4 p-4 border-neutral-800">
                <FaCss3Alt className="text-7xl text-blue-500" />
                CSS
            </motion.div>
            <motion.div variants={iconvarriant(2)} animate="animate" initial="initial" className="rounded-2xl text-center border-4 p-4 border-neutral-800">
                <FaBootstrap className="text-7xl text-purple-500" />
                Bootstrap
            </motion.div>
            <motion.div  variants={iconvarriant(2.5)} animate="animate" initial="initial" className="rounded-2xl text-center border-4 p-4 border-neutral-800">
                <RiTailwindCssFill className="text-7xl text-blue-400" />
                Tailwind
            </motion.div>
            <motion.div  variants={iconvarriant(2.5)} animate="animate" initial="initial" className="rounded-2xl text-center border-4 p-4 border-neutral-800">
                <SiDaisyui className="text-7xl text-green-300" />
                Daisyui
            </motion.div>
            <motion.div variants={iconvarriant(2.5)} animate="animate" initial="initial" className="rounded-2xl text-center border-4 p-4 border-neutral-800">
                <RiReactjsLine className="text-7xl text-cyan-400" />
                React js
            </motion.div>
            <motion.div variants={iconvarriant(3)} animate="animate" initial="initial" className="rounded-2xl text-center border-4 p-4 border-neutral-800">
                <FaNodeJs className="text-7xl text-green-500" />
                Node js
            </motion.div> 
            <motion.div variants={iconvarriant(5)} animate="animate" initial="initial" className="rounded-2xl text-center border-4 p-4 border-neutral-800">
                <FaJsSquare className="text-7xl text-yellow-400" />
                JavaScript
            </motion.div>
            <motion.div  variants={iconvarriant(5)} animate="animate" initial="initial" className="rounded-2xl text-center border-4 p-4 border-neutral-800">
                <SiTypescript className="text-7xl text-blue-500" />
                Typescript
            </motion.div>
            <motion.div  variants={iconvarriant(5)} animate="animate" initial="initial" className="rounded-2xl text-center border-4 p-4 border-neutral-800">
                <FaPython className="text-7xl text-blue-400" />
                Python
            </motion.div>
            <motion.div  variants={iconvarriant(5)} animate="animate" initial="initial" className="rounded-2xl text-center border-4 p-4 border-neutral-800">
                <TbBrandCpp className="text-7xl text-blue-600" />
                C++
            </motion.div>
            <motion.div  variants={iconvarriant(5)} animate="animate" initial="initial" className="rounded-2xl text-center border-4 p-4 border-neutral-800">
                <TbSquareLetterCFilled className="text-7xl text-blue-600" />
                C
            </motion.div>
            <motion.div variants={iconvarriant(4)} animate="animate" initial="initial" className="rounded-2xl text-center border-4 p-4 border-neutral-800">
                <SiMongodb className="text-7xl text-green-400" />
                MongoDB
            </motion.div>
            <motion.div  variants={iconvarriant(5)} animate="animate" initial="initial" className="rounded-2xl text-center border-4 p-4 border-neutral-800">
                <SiMysql className="text-7xl text-blue-400" />
                Mysql
            </motion.div>
            <motion.div  variants={iconvarriant(2.5)} animate="animate" initial="initial" className="rounded-2xl text-center border-4 p-4 border-neutral-800">
                <SiExpress className="text-7xl text-green-500" />
                Express
            </motion.div>
            <motion.div  variants={iconvarriant(5)} animate="animate" initial="initial" className="rounded-2xl text-center border-4 p-4 border-neutral-800">
                <SiFirebase className="text-7xl text-red-400" />
                Firebase
            </motion.div>
            <motion.div  variants={iconvarriant(5)} animate="animate" initial="initial" className="rounded-2xl text-center border-4 p-4 border-neutral-800">
                <FaFigma className="text-7xl text-orange-400 " />
                Figma
            </motion.div>
        </div>
    </div>
  )
}

export default Tech;