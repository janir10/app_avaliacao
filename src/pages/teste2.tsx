import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '../layouts/dashboard'
import { ReactElement } from 'react'

const inter = Inter({ subsets: ['latin'] })

const Teste2 = () => {
  return (
    <>
    <span>Teste 2</span>
    </>
  )
}

Teste2.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Teste2;
