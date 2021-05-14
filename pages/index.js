import Head from 'next/head'
import Image from 'next/image'

import {Hero} from "../components/hero/Hero";
import styles from '../styles/index.module.scss'
import {Intro} from "../components/intro/Intro";
import {Price} from "../components/price/Price";
import {Empty} from "../components/empty/Empty";
import {FloorPlans} from "../components/floorPlans/FloorPlans";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Māja Jūrmalā, Induļa 6</title>
        <meta name="description" content="Pārdod māju Asaros, Jūrmalā" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <div className={styles.content}>
      <Intro />
      <Price />
      <Empty />
      <FloorPlans />

      <footer className={styles.footer}>
        <p>Footer</p>
      </footer>
      </div>
    </div>
  )
}
