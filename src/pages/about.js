import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilepic from '../../public/images/profile/github_avatar.jpeg'
import javaheads from '../../public/images/profile/javaheads.png'
import ideathon from '../../public/images/profile/ideathon.jpeg'

const about = () => {
    return (
        <>
            <Head>
                <title>Pedro Frasson | Sobre mim</title>
                <meta name='description' content='any description' />
            </Head>
            <main className='flex w-full flex-col items-center justify-center font-roboto mx-auto'>
                <Layout className='pt-16 items-center justify-beetwen'>
                    <AnimatedText text="Empenho Gera Conquistas!" className='mb-16' />
                    <div className='grid w-full grid-cols-6 gap-16 items-center justify-self-center mx-auto'>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biografia</h2>
                            <p className='font-medium'>
                                - Desde que comecei a estudar sobre a área de Tecnologia, estou sempre buscando novas ideias e aprimorando minhas habilidades, minha jornada inclui incursões em diversas linguagens de programação, frameworks inovadores e metodologias de desenvolvimento.
                            </p>
                            <p className='my-4 font-medium'>
                                - A troca de experiências e perspectivas com colegas ao redor do globo não apenas amplia meu horizonte técnico, mas também molda minha visão de problemas complexos. A cada projeto prático, busco não apenas aplicar meu conhecimento, mas desafiar-me a encontrar soluções criativas, contribuindo assim para meu desenvolvimento profissional.
                            </p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2x1 border-2 border-solid border-dark 
                        bg-light p-6
                        '>
                            <div className='absolute top-2 -right-3 -z-10 w-[102%] h-[102%] rounded-2x1 bg-dark' />
                            <Image src={javaheads} alt='javaheads' className='w-full h-auto rounded-2x1' />

                        </div>
                        <div className='col-span-3 relative h-max rounded-2x1 border-2 border-solid border-dark 
                        bg-light p-6
                        '>
                            <div className='absolute top-2 -right-3 -z-10 w-[102%] h-[102%] rounded-2x1 bg-dark' />
                            <Image src={ideathon} alt='ideathon' className='w-full h-auto rounded-2x1' />

                        </div>
                        <div className='col-span-3 flex flex-col items-end justify-beetwen'>
                            <div>
                                <p className='font-medium inline-block'>
                                    - A expansão das minhas habilidades não se restringe ao domínio técnico. Reconheço a importância do aprimoramento de habilidades interpessoais, gestão de projetos e compreensão das necessidades do cliente. Estou comprometido em criar não apenas códigos eficientes, mas soluções que verdadeiramente atendam às demandas e expectativas dos usuários.
                                </p>
                            </div>
                        </div>
                        
                    </div >
                </Layout >
            </main >
        </>
    )
}

export default about