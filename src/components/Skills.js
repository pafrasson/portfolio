import React from 'react'
import { motion } from 'framer-motion'

const Skill = () => {
    
}

const Skills = () => {
    return (
        <>
            <motion.div style={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                <h1 className='font-bold text-8xl mt-64 w-full text-center text-dark/75'>
                    Certificações
                </h1>
                <h2 className='font-bold text-8xl mt-64 w-full text-center text-dark/75'>
                    Tecnologias
                </h2>

                <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
                    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
                p-6 shadow-dark cursor-pointer
                '
                        whileHover={{ scale: 1.05 }}
                    >
                        Web
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}

export default Skills