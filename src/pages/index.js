import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilepic from '../../public/images/profile/profile-port-hd.png'
import AnimatedText from '@/components/AnimatedText'
import { motion } from "framer-motion";
import Link from "next/link";
import { LinkArrow, WhatsappIcon } from '@/components/Icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio - Pedro Frasson</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className="flex items-center justify-between w-full">
            <div className='w-1/2'>
              <Image src={profilepic} alt='PedroFrasson' className='w-full h-auto shadow-xl hover:animate-trans-right' />
            </div>
            <div className='w-1/2 p-6 flex flex-col items-center self-center'>
              <AnimatedText text="Escrevendo o Futuro com Linhas de Código." className='!text-6xl !text-left' />
              <motion.p whileHover={{ y: -5 }} className='my-4 text-base font-semibold'
              >
                Trilhando meu Caminho como desenvolvedor de Software,  com Aprendizado Contínuo e Comprometimento.
              </motion.p>
              <div className='flex items-center self-start mt-10'>
                <Link href="/dummy.pdf" target={"_blank"}
                  className='flex items-center bg-orange-950 text-light p-2 px-5 
                rounded-lg text-lg font-medium hover:bg-light hover:text-orange-950 
                border-2 border-solid border-transparent hover:border-orange-950
                '
                  download={true}
                >Currículo <LinkArrow className={"w-6 ml-1"}></LinkArrow>

                </Link>
                <Link href="https://wa.me/+5543991414043" target={"_blank"}
                  className='flex items-center bg-green-600 text-light p-2 px-5 
                rounded-lg text-lg font-medium hover:bg-light hover:text-green-600
                border-2 border-solid border-transparent hover:border-green-600 ml-3
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