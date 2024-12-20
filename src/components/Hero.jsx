import {HERO_CONTENT} from "../constants/index";
import { motion } from "framer-motion";
import profile from '../images/others/me.png';

const Container = (delay) =>({
  hidden : {x:-100 , opacity:0},
  visible : {
    x : 0 ,
    opacity : 1 ,
    transition : {duration : 0.5 , delay : delay},
  },
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-800 pb-20 lg:mb-35 px-4">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 ">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 variants={Container(0)} initial="hidden" animate="visible"  className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl">Md. Abdur Rashid</motion.h1>
                <motion.span variants={Container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Web Developer</motion.span>
                <motion.p variants={Container(1)} initial="hidden" animate="visible" className="my-2 py-8 tracking-tighter max-w-xl font-light">{HERO_CONTENT}</motion.p>
                <a href="https://drive.google.com/drive/folders/1tE9W_kbBbnvHOnLUQ4y4ZC0OFJYQiAWr?usp=sharing"  target="_blank">
                  <button className="btn btn-outline btn-md border-4 mt-6 ">  <span className='flex px-2'>  My Resume/CV </span>  </button>
                </a>
            </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center ">
                <motion.img 
                 initial={{x:100 , opacity:0}} 
                 animate={{x:0 , opacity:1}}
                 transition={{duration:1 , delay:1.2}}
                className="rounded-xl w-96" src={profile} alt="Profile Pic" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;