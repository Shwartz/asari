import Head from 'next/head'

import {Hero} from "../components/hero/Hero";
import styles from '../styles/index.module.scss'
import {Intro} from "../components/intro/Intro";
import {Price} from "../components/price/Price";
import {Empty} from "../components/empty/Empty";
import {FloorPlans} from "../components/floorPlans/FloorPlans";
import {Gallery} from "../components/gallery/Gallery";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Māja Jūrmalā, Induļa 6</title>
        <meta name="description" content="Pārdod māju Asaros, Jūrmalā"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Hero/>

      <div className={styles.content}>
        <Intro/>
        <Price/>
        <Empty/>
        <FloorPlans/>
        <Gallery/>
        <footer className={styles.footer}>
          <p>Iedvesmai: https://senite.latio.lv/en/home-page-english/</p>
          <p>Iedvesmai: https://m.city24.lv/real-estate/houses-for-sale/Jurmala-Indula-iela/5449981/</p>
        </footer>
      </div>
    </div>
  )
}
