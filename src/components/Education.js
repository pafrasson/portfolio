import React from 'react'
import { motion } from "framer-motion";

const Details = ({ type, time, place, info }) => {
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <h3 className='capitalize font-bold text-lg'>{type}</h3>
            <span className='capitalize font-semibold text-dark/75 dark:text-slate-300'>
                {time} | {place}
            </span>
            <p className='font-medium w-full'>
                {info}
            </p>
        </motion.div>
    </li>

}

const Education = () => {
    return (
        <motion.div className='my-64' style={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className='font-bold text-8xl mb-32 w-full text-center text-dark/75 dark:text-light
            lg:!text-7x1 sm:!text-6xl xs:!text-4xl sm:mb-8'>
                Educação e Trabalho
            </h2>

            <div className='w-[75%] mx-auto relative'>

                <div className='absolute left-8 top-0 w-[4-px] h-full bg-dark origin-top' />

                <ul className='w-full flex flex-col items-start justify-between mb-8'>
                    <Details
                        type="Engenharia de Software - Bacharelado"
                        time="2022-2026"
                        place="UniSenai PR"
                        info="Desenvolvimento web · Programação orientada a objetos (POO) 
                        · Estruturas de dados · Algoritmos · Cibersegurança · Sistemas operacionais 
                        · Modelagem de software"
                    />
                    <Details
                        type="Técnico em informática"
                        time="2019-2020"
                        place="Serviço Nacional de Aprendizagem Industrial (SENAI)"
                        info="Instalação de hardware · Hardware de computador · Rede de computadores · Lógica de programação"
                    />
                    <Details
                        type="Analista de suporte técnico"
                        time="novembro 2022 - atualmente"
                        place="Astersoft Sistemas"
                        info="Sistemas operacionais · Contato com clientes · 
                        Rede de área local (LAN) · Solução de problemas técnicos · Microsoft Excel"
                    />
                </ul>
            </div>
        </motion.div>
    )
}

export default Education