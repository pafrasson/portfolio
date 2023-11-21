import React from "react";
import { motion } from "framer-motion";

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            
        },
    }
}

const singelWord = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.5,
        }
    }
}

const AnimatedText = ({ text, className = "" }) => {
    return (
        <div className="w-full mx-auto py-2 flex items-center justify-center overflow-hidden
        ">
            <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
                variants={quote}
                whileHover={{ y: -5 }}
                initial="initial"
                animate="animate"
            >
                {
                    text.split(" ").map((word, index) =>
                        <motion.span key={word + '-' + index} className="inline-block"
                            variants={singelWord}
                        >
                            {word}&nbsp;
                        </motion.span>
                    )
                }
            </motion.h1>
        </div>
    )
}
export default AnimatedText