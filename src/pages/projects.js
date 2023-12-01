import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons';
import project1img from '../../public/images/projects/budgetplanner.png'
import project2img from '../../public/images/projects/credit_API.png'
import project3img from '../../public/images/projects/santander.png'
import project4img from '../../public/images/projects/playermusic.png'
import project5img from '../../public/images/projects/calcsalario.png'
import project6img from '../../public/images/projects/passwordgen.png'
import project7img from '../../public/images/projects/collections.png'
import Transition from '@/components/Transition';

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full flex items-center justify-between relative rounded-br-2xl
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12
    dark:bg-dark dark:border-light

    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    xl:rounded-2xl xl:rounded-br-3xl xl:p-8
    '>
      <div className='absolute top-2 -right-3 -z-10 w-[100%] h-[101%] rounded-[2.5rem] bg-dark dark:bg-light
      rounded-br-3xl
      xs:-right-2 sm:h-[100%] xs:w-full xs:rounded-[1.5rem]
      ' />
      <Link href={link} target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg
        lg:w-full xl:w-full
        '
      >
        <Image src={img} alt={title} className='w-full h-auto rounded-3xl' />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6
      lg:w-full lg:pl-0 lg:pt-6
      '>
        <span className='text-primary font-medium text-xl
        xs:text-base
        xl:text-lg
        '>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-1 dark:text-light'>
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light
          sm:text-sm
          xl:text-2xl
          '>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light '>
          {summary}
        </p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10 dark:text-light'> <GithubIcon /> </Link>
          <Link href={link} target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            hover:bg-primary hover:text-dark dark:bg-light dark:text-dark dark:hover:bg-primary
            sm:px-4 sm:text-base
            '
          > Visitar Repositório </Link>
        </div>
      </div>

    </article>
  )
}

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid
     border-dark bg-light p-6 relative'>
      <Link href={link} target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt={title} className='w-full h-auto rounded-3xl' />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-1'>
          <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
        </Link>

        <div className='w-full mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'> <GithubIcon /> </Link>
          <Link href={link} target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            hover:bg-primary hover:text-dark justify-between
            '
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
      <Transition/>
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text="Superar, inovar, criar, descobrir."
            className='mb-16
          lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl
          ' />
          <div className='grid grid-cols-12 gap-24 gap-y-32 
          xl:gap-x-8 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 sm:grid-cols-1 2xl:grid-cols-6 lg:grid-cols-12'>
            <div className='col-span-6'>
              <FeaturedProject
                title="Gerenciador de Receita e Despesas"
                summary="Aplicação web, é possível gerenciar despesas e receitas de tal dia, e visualizar
                o valor total final de todas elas, foi utilizado sqlite como banco de dados e javascript para desenvolver a regra de negócio."
                link="https://github.com/pafrasson/budget-planner"
                github="https://github.com/pafrasson/budget-planner"
                type="Node + Javascript + Sqlite"
                img={project1img}
              />
            </div>
            <div className='col-span-6'>
              <FeaturedProject
                title="Password Generator"
                summary="Gera uma senha aleatória utilizando a biblioteca Math JS."
                link="https://github.com/pafrasson/gerador-de-senhas/tree/master"
                github="https://github.com/pafrasson/gerador-de-senhas/tree/master"
                type="JS + HTML + CSS"
                img={project6img}
              />
            </div>
            <div className='col-span-6'>
              <FeaturedProject
                title="Credit Application System"
                summary="API Rest para um Sistema de Análise de Solicitação de Crédito."
                link="https://github.com/pafrasson/Credit-application-system-pafrasson"
                github="https://github.com/pafrasson/Credit-application-system-pafrasson"
                type="Kotlin + Spring Boot"
                img={project2img}
              />
            </div>

            <div className='col-span-6'>
              <FeaturedProject
                title="Collection Framework API"
                summary="Repositório de estudos."
                link="https://github.com/pafrasson/collection-framework-API"
                github="https://github.com/pafrasson/collection-framework-API"
                type="Java"
                img={project7img}
              />
            </div>
            <div className='col-span-6'>
              <FeaturedProject
                title="Santander Home"
                link="https://github.com/pafrasson/Santander-home"
                github="https://github.com/pafrasson/Santander-home"
                type="Angular"
                img={project3img}
              />
            </div>
            <div className='col-span-6'>
              <FeaturedProject
                title="Music Player"
                summary="Simples player de músicas criado com Javascript."
                link="https://github.com/pafrasson/projeto-player-de-musicas"
                github="https://github.com/pafrasson/projeto-player-de-musicas"
                type="JS + HTML + CSS"
                img={project4img}
              />
            </div>
            <div className='col-span-6'>
              <FeaturedProject
                title="RH page"
                summary="Cálculo de Férias e Salário Líquido."
                link="https://github.com/pafrasson/calcSalario"
                github="https://github.com/pafrasson/calcSalario"
                type="JS + HTML + CSS"
                img={project5img}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects