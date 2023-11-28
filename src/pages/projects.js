import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons';
import project1img from '../../public/images/projects/budgetplanner.png'

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full flex items-center justify-between
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12
    '>
      <Link href={link} target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt={title} className='w-full h-auto rounded-3xl' />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-primary font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-1'>
          <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark '>
          {summary}
        </p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'> <GithubIcon /> </Link>
          <Link href={link} target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'
          > Visitar Repositório </Link>
        </div>
      </div>

    </article>
  )
}

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className='w-full flex items-center justify-center rounded-2xl border border-solid
     border-dark bg-light p-6 relative'>
      <Link href={link} target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt={title} className='w-full h-auto rounded-3xl' />
      </Link>

      <div className='w-full flex flex-col items-start justify-between pl-6'>
        <span className='text-primary font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-1'>
          <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
        </Link>

        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'> <GithubIcon /> </Link>
          <Link href={link} target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'
          > Visitar Repositório </Link>
        </div>
      </div>
    </article>
  )
}

const projects = () => {
  return (
    <>
      <Head>
        <title>Pedro Frasson | Projetos</title>
        <meta name='description' content='any description' />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text="Superar, inovar, criar, descobrir." className='mb-16' />
          <div className='grid grid-cols-12 gap-24'>
            <div className='col-span-12'>
              <FeaturedProject
                title="Gerenciador de Receita e Despesas"
                summary="Aplicação web, é possível gerenciar despesas e receitas de tal dia, e visualizar
                o valor total final de todas elas, foi utilizado sqlite como banco de dados e javascript para desenvolver a regra de negócio"
                link="/"
                github="/"
                type="Featured Project"
                img={project1img}
              />
            </div>
            <div className='col-span-6'>
              <Project
                title="Gerenciador de Receita e Despesas"
                link="/"
                github="/"
                type="Featured Project"
                img={project1img}
              />
            </div>
            <div className='col-span-6'>
              project1
            </div>
            <div className='col-span-12'>
              Featured Project
            </div>
            <div className='col-span-6'>
              Project 3
            </div>
            <div className='col-span-6'>
              Project 4
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects