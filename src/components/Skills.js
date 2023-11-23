import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y, className = "" }) => {
    return (
        <motion.div className={`flex items-center justify-center rounded-full font-semibold bg-dark text-light 
                py-3 px-6 shadow-dark cursor-pointer absolute ${className}
                `}
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <motion.div style={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                <h2 className='font-bold text-8xl mt-64 w-full text-center text-dark/75'>
                    Skills
                </h2>

                <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
                    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
                p-6 shadow-dark cursor-pointer
                '
                        whileHover={{ scale: 1.05 }}
                    >

                    </motion.div>

                    <Skill name="Angular" x="-5vw" y="-10vw" className='!bg-red-600' />
                    <Skill name="ReactJS" x="-8vw" y="10vw" className='!bg-sky-400' />
                    <Skill name="Kotlin" x="8vw" y="-12.4vw" className='!bg-violet-700' />
                    <Skill name="Java" x="-23vw" y="0vw" className='!bg-orange-600' />
                    <Skill name="Spring" x="21vw" y="6vw" className='!bg-green-600' />
                    <Skill name="HTML" x="18vw" y="-16vw" className='!bg-orange-700' />
                    <Skill name="CSS" x="-22vw" y="-14vw" className='!bg-purple-950' />
                    <Skill name="Javascript" x="-1vw" y="-16vw" className='!bg-yellow-400' />
                    <Skill name="Typescript" x="1vw" y="16vw" className='!bg-blue-900' />
                    <Skill name="Docker" x="12vw" y="-3vw" className='!bg-blue-950' />
                    <Skill name="AWS" x="-12vw" y="3vw" className='!bg-orange-400' />
                    <Skill name="Sqlite" x="10vw" y="9vw" className='!bg-blue-950' />
                    <Skill name="TailwindCSS" x="-22vw" y="14vw" className='!bg-cyan-400' />
                </div>
            </motion.div>
        </>
    )
}

export default Skills