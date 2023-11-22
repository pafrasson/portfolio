import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilepic from '../../public/images/profile/github_avatar.jpeg'
import { motion } from "framer-motion";

const about = () => {
    return (
        <>
            <Head>
                <title>Pedro Frasson | Sobre mim</title>
                <meta name='description' content='any description' />
            </Head>
            <main className='flex w-full flex-col items-center justify-center font-roboto'>
                <Layout className='pt-16'>
                    <AnimatedText text="Passion fuels purpose!" className='mb-16' />
                    <div className='grid w-full grid-cols-8 gap-16 items-center'>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biografia</h2>
                            <p className='font-medium'>
                                - Hi, CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional,
                                and user-centered digital experiences. With 4 years of experience in the field. I am always looking for
                                new and innovative ways to bring my clients visions to life.
                            </p>
                            <p className='my-4 font-medium'>
                                - I believe that design is about more than just making things look pretty
                            </p>
                            <p className='font-medium'>
                                - its about solving problems and
                                creating intuitive, enjoyable experiences for users.
                                its about solving problems and
                                creating intuitive, enjoyable experiences for users.
                                its about solving problems and
                                creating intuitive, enjoyable experiences for users.
                                its about solving problems and
                                creating intuitive, enjoyable experiences for users.
                                its about solving problems and
                                creating intuitive, enjoyable experiences for users.
                                its about solving problems and
                                creating intuitive, enjoyable experiences for users.
                            </p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-full border-2 border-solid border-dark 
                        bg-light p-6
                        '>
                            <div className='absolute top-2 -right-3 -z-10 w-[102%] h-[102%] rounded-full bg-dark' />
                            <Image src={profilepic} alt='pafrasson' className='w-full h-auto rounded-full' />
                        </div>
                        <div>
                            <div>
                                <span>50+</span>
                                <h2>Satisfied Clients</h2>
                            </div>

                            <div>
                                <span>50+</span>
                                <h2>Satisfied Clients</h2>
                            </div>
                        </div>
                    </div >
                </Layout >
            </main >
        </>
    )
}

export default about