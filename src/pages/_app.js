import '@/styles/globals.css'
import { Roboto, Roboto_Serif } from "next/font/google"
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '@/components/Footer'

const roboto = Roboto_Serif({
  subsets: ['latin'],
  variable: "--font-roboto",
  weight: ['400', '700'],
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head className="">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${roboto.className} font-roboto bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}