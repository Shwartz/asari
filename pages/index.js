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
        <div style={{background: 'salmon'}}>
          <p>Section: Īpašuma atrašanās vieta, karte:Riga-Jurmala, karte: Jurmala, Karte: Asari</p>
          <p>Section: Bilžu galerija</p>
          <p>Section: Sīkāk par to kas tieši tiek pārdots</p>
        </div>
        <footer className={styles.footer}>
          <p>Footer</p>
        </footer>
      </div>
    </div>
  )
}
