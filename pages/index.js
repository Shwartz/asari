import Head from 'next/head'

import {Hero} from "../components/hero/Hero";
import styles from '../styles/index.module.scss'
import {LongStory} from "../components/longStory/LongStory";
import {Contact} from "../components/contact/Contact";
import {FloorPlans} from "../components/floorPlans/FloorPlans";
import {Gallery} from "../components/gallery/Gallery";
import {Map} from "../components/map/Map";

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
        <Map/>
        <Contact/>
        <FloorPlans/>
        <Gallery/>
        <LongStory/>
        <footer className={styles.footer}>
          <p>Iedvesmai: https://senite.latio.lv/en/home-page-english/</p>
          <p>Iedvesmai: https://m.city24.lv/real-estate/houses-for-sale/Jurmala-Indula-iela/5449981/</p>
          <a href='#contact-me' className={styles.contactMe}>Sazināties ar īpašnieku</a>
        </footer>
      </div>
    </div>
  )
}
