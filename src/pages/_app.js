import '@/styles/globals.css'
import { Roboto, Roboto_Serif } from "next/font/google"
import Head from 'next/head'
import NavBar from '../components/NavBar'

const roboto = Roboto_Serif({
  subsets: ['latin'],
  variable: "--font-roboto",
  weight: ['400', '700'],
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${roboto.className} bg-light w-full min-h-screen`}>
        <NavBar>aaa</NavBar>
        <Component {...pageProps} />
      </main>
    </>
  )
}