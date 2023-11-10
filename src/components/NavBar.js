import React from "react";
import { Roboto, Roboto_Serif } from "next/font/google"
import Link from "next/link";

const roboto = Roboto({
    subsets: ['latin'],
    variable: "--font-roboto",
    weight: ['400', '700'],
})

const CustomLink = ({ href, title, className = "" }) => {
    return(
        <Link href={href} className={`${className}`}>
            {title}
        </Link>
    )
}

const NavBar = () => {
    return (
        <header className={`${roboto.className} w-full px-32 py-8 font-medium flex items-center justify-between mt-2`}>
            <nav>
                <CustomLink href="/" title="Home" className="mr-4"/>
                <CustomLink href="/about" title="Sobre mim"/>
                <CustomLink href="/projects" title="Projetos"/>
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