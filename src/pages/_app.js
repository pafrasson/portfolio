import '@/styles/globals.css'
import { Roboto, Roboto_Serif } from "next/font/google"
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '@/components/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

const roboto = Roboto_Serif({
  subsets: ['latin'],
  variable: "--font-roboto",
  weight: ['400', '700'],
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head className="">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${roboto.className} font-roboto bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar />
        <AnimatePresence mode='wait'>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  )
}