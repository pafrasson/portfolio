import React from "react";
import { Roboto, Roboto_Flex } from "next/font/google"
import Link from "next/link";
import { useRouter } from "next/router";
import { GithubIcon, InstaIcon, LinkedinIcon } from "./Icons";
import { motion } from "framer-motion";

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
             `}
            >&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
    return (
        <header className={`${roboto.className} w-full px-32 py-8 font-medium flex items-center justify-between mt-2`}>
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
            </nav>
        </header>
    )
}

export default NavBar