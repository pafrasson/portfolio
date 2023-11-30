import React from "react";
import Layout from '@/components/Layout'
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark 
        font-medium text-lg sm:text-base
        ">
            <Layout className="py-6 flex items-center justify-between bg-stone-700 text-light font-roboto 
            lg:flex-col lg:py-6">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div>Built by<span className="font-semibold"> Pedro Frasson</span></div>
            </Layout>
        </footer>
    )
}
export default Footer