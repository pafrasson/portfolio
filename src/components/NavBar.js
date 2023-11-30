import React, { use, useState } from "react";
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

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href)
    }

    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}

            <span className={`h-[1px] inline-block bg-light dark:bg-dark
             absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
             ${router.asPath === href ? 'w-full' : 'w-0'}
             dark:bg-light`}

            >&nbsp;</span>
        </button>
    )
}

const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className={`${roboto.className} w-full px-36 py-8 font-medium flex items-center justify-between mt-2
        dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8
        `}>

            <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm
                 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5
                 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm
                 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className="w-full flex justify-between items-center lg:hidden">
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
            </div>

            {
                isOpen ?
                    <motion.div
                        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2
             -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/90 rounded-lg py-32">
                        <nav className="flex items-center flex-col justify-center">
                            <CustomMobileLink href="/" title="Home" className="" toggle={handleClick} />
                            <CustomMobileLink href="/about" title="Sobre mim" className="" toggle={handleClick} />
                            <CustomMobileLink href="/projects" title="Projetos" className="" toggle={handleClick} />
                        </nav>
                        <nav className="flex items-center justify-center flex-wrap mt-2">
                            <motion.a href="https://github.com/pafrasson" target={"_blank"}
                                whileHover={{ y: -3 }}
                                className="w-6 mx-3 bg-light rounded-full dark:bg-dark
                                sm:mx-1
                                "
                            >
                                <GithubIcon />
                            </motion.a>

                            <motion.a href="https://www.linkedin.com/in/pafrasson/" target={"_blank"}
                                whileHover={{ y: -3 }}
                                className="w-6 mx-3
                                sm:mx-1"
                            >
                                <LinkedinIcon />
                            </motion.a>

                            <motion.a href="https://www.instagram.com/frass.io/" target={"_blank"}
                                whileHover={{ y: -3 }}
                                className="w-6 mx-3
                                sm:mx-1
                                sm:dark:bg-dark
                                "
                            >
                                <InstaIcon />
                            </motion.a>

                            <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
                                className={`ml-3 flex items-center justify-center rounded-full p-1 sm:mx-1 sm:dark:bg-dark sm:bg-light
                ${mode === "light" ? " text-dark" : " text-light"}
                `}
                            >
                                {
                                    mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
                                }
                            </button>
                        </nav>
                    </motion.div>
                    : null
            }
        </header >
    )
}

export default NavBar