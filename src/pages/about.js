import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import { motion } from "framer-motion";
import javaheads from '../../public/images/profile/javaheads.png'
import ideathon from '../../public/images/profile/ideathon.jpeg'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const about = () => {
    return (
        <>
            <Head>
                <title>Pedro Frasson | Sobre mim</title>
                <meta name='description' content='any description' />
            </Head>
            <main className='flex w-full flex-col items-center justify-center font-roboto mx-auto dark:text-light'>
                <Layout className='pt-16 items-center justify-beetwen'>
                    <AnimatedText text="Empenho Gera Conquistas!" className='!mb-16 lg:!text-7x1 sm:!text-6xl xs:!text-4xl sm:mb-8' />
                    <div className='grid w-full grid-cols-6 gap-16 items-center justify-self-center mx-auto
                    sm:gap-8
                    '>
                        <motion.div className='col-span-3 flex flex-col items-start justify-start
                         xl:col-span-8 xl:items-center md:order-2'
                            style={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>um pouco sobre mim</h2>
                            <p className='font-medium'>
                                - Desde que comecei a estudar sobre a área de Tecnologia,
                                estou sempre buscando estudar novos frameworks e metodologias
                                que possam me ajudar a ser mais produtivo.
                            </p>
                            <p className='my-4 font-medium'>
                                - A troca de experiências e perspectivas com meus colegas não apenas amplia meu horizonte técnico,
                                mas também molda minha visão sobre as coisas. Adoro participar de eventos, e conhecer pessoas com o mesmo
                                objetivo que eu.
                            </p>
                        </motion.div>
                        <div className='col-span-3 relative h-max rounded-2x1 border-2 border-solid border-dark 
                        bg-light p-6 xl:col-span-8 md:order-2 xl:items-center
                        '
                        >
                            <div className='absolute top-2 -right-3 -z-10 w-[102%] h-[102%] rounded-2x1 bg-dark dark:bg-light/75' />
                            <div>
                                <Image src={javaheads} alt='javaheads' className='w-full h-auto rounded-2x1'
                                    priority
                                />
                            </div>

                        </div>
                        <div className='col-span-3 relative h-max rounded-2x1 border-2 border-solid border-dark 
                        bg-light p-6 xl:col-span-8
                        '
                        >
                            <div className='absolute top-2 -right-3 -z-10 w-[102%] h-[102%] rounded-2x1 bg-dark dark:bg-light/75' />
                            <div>
                                <Image src={ideathon} alt='ideathon' className='w-full h-auto rounded-2x1'
                                    priority
                                />
                            </div>
                        </div>
                        <div className='col-span-3 flex flex-col items-end justify-beetwen xl:items-center xl:col-span-8 xl:flex-row md:order-3'>
                            <motion.div style={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}>
                                <p className='font-medium inline-block'>
                                    - Estou comprometido em criar não apenas códigos eficientes, mas soluções que verdadeiramente atendam às
                                    demandas e expectativas das pessoas.
                                </p>
                            </motion.div>
                        </div>

                    </div >

                    <Skills />
                    <Experience />
                    <Education />
                </Layout >
            </main >
        </>
    )
}

export default about