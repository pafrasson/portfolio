import React from 'react'
import { motion } from "framer-motion";

const Details = ({ position, company, companyLink, time, work, cert, certificateLink, githubLink, git }) => {
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <div>
            <h3 className='capitalize font-bold text-lg'>{position}&nbsp;<a href={companyLink}
                target={"_blank"} className='text-primary capitalize'>
                @{company}</a></h3>
            <span className='capitalize font-semibold text-dark/75'>
                {time}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>

            <a href={certificateLink} target={"_blank"} className='hover:text-primary capitalize font-semibold text-dark/75'>{cert}</a>
            <p></p>
            <a href={githubLink} target={"_blank"} className='hover:text-primary capitalize font-semibold text-dark/75'>{git}</a>

        </div>
    </li>

}

const Experience = () => {
    return (
        <motion.div className='my-64' style={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className='font-bold text-8xl mb-32 w-full text-center text-dark/75'>
                Certificações e experiências
            </h2>

            <div className='w-[75%] mx-auto relative'>

                <div className='absolute left-8 top-0 w-[4-px] h-full bg-dark origin-top' />

                <ul className='w-full flex flex-col items-start justify-between mb-4'>
                    <Details
                        position="Code Update TQI - Backend com Kotlin e Java"
                        companyLink="https://www.dio.me/certificate/E91B312C"
                        company="Bootcamp DIO"
                        time="Carga horária: 68 horas"
                        work="Neste bootcamp, criei uma API para Sistema de Avaliação de Créditos utilizando Spring Boot com Kotlin,
                        aprendi sobre Estruturas de Controle de Fluxo e Coleções,
                        Funções e Tratamento de Exceções em Kotlin"
                        certificateLink="https://gist.github.com/cami-la/560b455b901778391abd2c9edea81286"
                        cert="Desafio proposto pelo Bootcamp "
                        githubLink="https://github.com/pafrasson/Credit-application-system-pafrasson"
                        git="Meu repositório Github"
                    />
                </ul>
                <ul className='w-full flex flex-col items-start justify-between mb-4'>
                    <Details
                        position="Code Update TQI - Backend com Kotlin e Java"
                        companyLink="https://www.dio.me/certificate/E91B312C"
                        company="Bootcamp DIO"
                        time="Carga horária: 68 horas"
                        work="Neste bootcamp, criei uma API para Sistema de Avaliação de Créditos utilizando Spring Boot com Kotlin,
                        aprendi sobre Estruturas de Controle de Fluxo e Coleções,
                        Funções e Tratamento de Exceções em Kotlin"
                        certificateLink="https://gist.github.com/cami-la/560b455b901778391abd2c9edea81286"
                        cert="Desafio proposto pelo Bootcamp "
                        githubLink="https://github.com/pafrasson/Credit-application-system-pafrasson"
                        git="Meu repositório Github"
                    />
                </ul>
                <ul className='w-full flex flex-col items-start justify-between mb-4'>
                    <Details
                        position="Code Update TQI - Backend com Kotlin e Java"
                        companyLink="https://www.dio.me/certificate/E91B312C"
                        company="Bootcamp DIO"
                        time="Carga horária: 68 horas"
                        work="Neste bootcamp, criei uma API para Sistema de Avaliação de Créditos utilizando Spring Boot com Kotlin,
                        aprendi sobre Estruturas de Controle de Fluxo e Coleções,
                        Funções e Tratamento de Exceções em Kotlin"
                        certificateLink="https://gist.github.com/cami-la/560b455b901778391abd2c9edea81286"
                        cert="Desafio proposto pelo Bootcamp "
                        githubLink="https://github.com/pafrasson/Credit-application-system-pafrasson"
                        git="Meu repositório Github"
                    />
                </ul>
            </div>
        </motion.div>
    )
}

export default Experience