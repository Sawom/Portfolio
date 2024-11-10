import React from 'react';
import { motion } from "framer-motion";

const Education = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2 
            whileInView={{opacity:1 , y:0}} 
            initial={{opacity:0 , y:-100}} 
            transition={{duration:1.5}}
        className="my-10 text-center text-4xl">Education</motion.h2>
        </div>
    );
};

export default Education;