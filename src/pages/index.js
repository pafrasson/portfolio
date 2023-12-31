import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilepic from '../../public/images/profile/profile-port-hd.png'
import AnimatedText from '@/components/AnimatedText'
import { motion } from "framer-motion";
import Link from "next/link";
import { LinkArrow, WhatsappIcon } from '@/components/Icons'
import Transition from '@/components/Transition'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio - Pedro Frasson</title>
        <meta name="description" content="Meu Portfolio" />
      </Head>
      <Transition />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <motion.div className='w-1/2 md:w-full'
              style={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileTap={{
                opacity: 1,
                scale: 1.03,
              }}
              transition={{ duration: 0.6 }}>
              <Image src={profilepic} alt='PedroFrasson' className='w-full h-auto shadow-xl 
              lg:hidden md:inline-block md:w-full'
                priority
              />
            </motion.div>
            <div className='w-1/2 p-6 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Escrevendo o Futuro com Linhas de Código." className='!text-6xl !text-left
               xl:!text-5xl lg:!text-center lg:!text-5xl md:!text5xl sm:!text-3xl
              ' />
              <motion.p whileHover={{ y: -5 }} className='my-4 text-base font-semibold md:text-sm sm:text-xs'
              >
                Trilhando meu Caminho como desenvolvedor de Software,  com Aprendizado Contínuo e Comprometimento.
              </motion.p>
              <div className='flex items-center self-start mt-10 lg:self-center'>
                <Link href="/pedro frasson.pdf" target={"_blank"}
                  className='flex items-center bg-orange-950 text-light p-2 px-5 
                rounded-lg text-lg font-medium hover:bg-light hover:text-orange-950 
                border-2 border-solid border-transparent hover:border-orange-950

                dark:bg-light dark:border-orange-950 dark:text-orange-950
                dark:hover:bg-orange-950 dark:hover:text-light

                md:p-2 md:px-4 md:text-base
                '
                  download={true}
                >Currículo <LinkArrow className={"w-6 ml-1"}></LinkArrow>

                </Link>
                <Link href="https://wa.me/+5543991414043" target={"_blank"}
                  className='flex items-center bg-green-600 text-light p-2 px-5 
                rounded-lg text-lg font-medium hover:bg-light hover:text-green-600
                border-2 border-solid border-transparent hover:border-green-600 ml-3

                dark:bg-light dark:hover:bg-green-600 dark:hover:text-light
                 dark:text-green-600 dark:border-green-600

                 md:p-2 md:px-4 md:text-base
                '
                >Contato <WhatsappIcon className={"w-6 ml-1"}></WhatsappIcon>

                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}