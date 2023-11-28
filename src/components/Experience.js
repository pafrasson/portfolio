import React from 'react'
import { motion } from "framer-motion";

const Details = ({ position, company, companyLink, time, work, cert, certificateLink, githubLink, git }) => {
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
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

        </motion.div>
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

                <ul className='w-full flex flex-col items-start justify-between mb-8'>
                    <Details
                        position="Code Update TQI - Backend com Kotlin e Java"
                        companyLink="https://www.dio.me/certificate/E91B312C"
                        company="Bootcamp DIO"
                        time="Carga horária: 68 horas"
                        work="Neste bootcamp, criei uma API para Sistema de Avaliação de Créditos utilizando Spring Boot com Kotlin,
                        aprendi sobre Estruturas de Controle de Fluxo e Coleções,
                        Funções e Tratamento de Exceções em Kotlin."
                        certificateLink="https://gist.github.com/cami-la/560b455b901778391abd2c9edea81286"
                        cert="Desafio proposto pelo Bootcamp "
                        githubLink="https://github.com/pafrasson/Credit-application-system-pafrasson"
                        git="Meu repositório Github"
                    />
                </ul>
                <ul className='w-full flex flex-col items-start justify-between mb-8'>
                    <Details
                        position="Desenvolvimento Java com Cloud AWS"
                        companyLink="https://www.dio.me/certificate/02335B01"
                        company="Bootcamp DIO"
                        time="Carga horária: 65 horas"
                        work="Neste bootcamp, aprendi sobre como utilizar Collections (SET, LIST, MAP) para manipular objetos em Java,
                        e também como utilizar os serviços IAM e EC2 da AWS."
                        certificateLink="https://github.com/pafrasson/collection-framework-API"
                        cert="Repositório Java Collections "
                        githubLink="https://github.com/pafrasson/Design-Patterns-Project"
                        git="Java Design Patterns"
                    />
                </ul>
                <ul className='w-full flex flex-col items-start justify-between mb-8'>
                    <Details
                        position="Jornada de aprendizagem: Projeto ChatBot"
                        companyLink="https://www.linkedin.com/school/unisenai.pr/?originalSubdomain=br"
                        company="UniSenaiPR"
                        time="2023"
                        work='Fiquei responsável pela parte de deploy do projeto utilizando Docker e AWS,
                        criamos uma instância Linux no serviço EC2 para alocar a nossa aplicação Node, para que a API pudesse
                        ser acessada pelo FrontEnd.'
                        certificateLink="https://www.linkedin.com/posts/pafrasson_7-mostra-de-resultados-da-jornada-de-aprendizagem-activity-7133772512168935425-dWXl?utm_source=share&utm_medium=member_desktop"
                        cert="ver mais "
                    />
                </ul>
                <ul className='w-full flex flex-col items-start justify-between mb-8'>
                    <Details
                        position="Hackatur"
                        companyLink="https://codel.londrina.pr.gov.br/index.php/turismo-em-londrina/nucleo-de-turismo-de-londrina.html"
                        company="Gov. de Turismo"
                        time="2022"
                        work='Este evento foi uma oportunidade incrível para colocar em prática minhas SoftSkills.
                         minha equipe idealizou uma solução inovadora para um problema real na indústria de eventos. Conversamos com pessoas da área para entender o problema e requisitos, elaboramos solução e apresentamos um protótipo visual para a banca de jurados. 
                        Todos os esforços, dedicação e trabalho em equipe valeram a pena quando ouvimos nosso nome como vencedores.'
                        certificateLink="https://www.instagram.com/p/CkHUaEJtjla/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                        cert="ver mais "
                    />
                </ul>
                <ul className='w-full flex flex-col items-start justify-between mb-8'>
                    <Details
                        position="Ideathon Smart Agro"
                        companyLink="https://srp.com.br/"
                        company="SRP"
                        time="2023"
                        work='O Ideathon foi uma maratona de geração de ideias, soluções,
                         produtos e serviços para os principais segmentos econômicos que congregam a cadeia do agronegócio.
                         Minha equipe apresentou uma solução para o setor de Piscicultura. '
                        certificateLink="https://www.linkedin.com/posts/pafrasson_inovaaexaeles-ideathon-activity-7043723464192450560-1T-W?utm_source=share&utm_medium=member_desktop"
                        cert="ver mais "
                    />
                </ul>
            </div>
        </motion.div>
    )
}

export default Experience