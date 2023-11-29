import React, { use } from "react";
import { Roboto, Roboto_Flex } from "next/font/google"
import Link from "next/link";
import { useRouter } from "next/router";
import { GithubIcon, InstaIcon, LinkedinIcon, MoonIcon, SunIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const roboto = Roboto_Flex({
    subsets: ['latin'],
    variable: "--font-roboto",
    weight: ['400', '700'],
})

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[1px] inline-block bg-dark
             absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
             ${router.asPath === href ? 'w-full' : 'w-0'}
             dark:bg-light`}

            >&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher();

    return (
        <header className={`${roboto.className} w-full px-36 py-8 font-medium flex items-center justify-between mt-2
        dark:text-light
        `}>
            <nav>
                <CustomLink href="/" title="Home" className="mr-4" />
                <CustomLink href="/about" title="Sobre mim" className="mx-4" />
                <CustomLink href="/projects" title="Projetos" className="ml-4" />
            </nav>
            <nav className="flex items-center justify-center flex-wrap">
                <motion.a href="https://github.com/pafrasson" target={"_blank"}
                    whileHover={{ y: -3 }}
                    className="w-6 mx-3"
                >
                    <GithubIcon />
                </motion.a>

                <motion.a href="https://www.linkedin.com/in/pafrasson/" target={"_blank"}
                    whileHover={{ y: -3 }}
                    className="w-6 mx-3"
                >
                    <LinkedinIcon />
                </motion.a>

                <motion.a href="https://www.instagram.com/frass.io/" target={"_blank"}
                    whileHover={{ y: -3 }}
                    className="w-6 mx-3"
                >
                    <InstaIcon />
                </motion.a>

                <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
                    className={`ml-3 flex items-center justify-center rounded-full p-1
                ${mode === "light" ? " text-dark" : " text-light"}
                `}
                >
                {
                    mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
                }
            </button>
        </nav>
        </header >
    )
}

export default NavBar