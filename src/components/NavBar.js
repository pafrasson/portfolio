import React from "react";
import { Roboto, Roboto_Flex } from "next/font/google"
import Link from "next/link";
import { useRouter } from "next/router";

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

            <span className="h-[1px] inline-block w-0 bg-dark
             absolute left-0 -bottom-0.5 
             group-hover:w-full transition-[width] ease duration-300"
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
            <nav>
                <Link href="/" target={"_blank"}>L</Link>
                <Link href="/" target={"_blank"}>L</Link>
                <Link href="/" target={"_blank"}>L</Link>
            </nav>
        </header>
    )
}

export default NavBar