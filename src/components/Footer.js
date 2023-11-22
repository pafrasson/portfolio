import React from "react";
import Layout from '@/components/Layout'
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark 
        font-medium text-lg
        ">
            <Layout className="py-8 flex items-center justify-between">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div>Build by<span className="underline font-semibold"> Pedro Frasson</span></div>
            </Layout>
        </footer>
    )
}
export default Footer