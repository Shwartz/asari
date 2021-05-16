import Head from 'next/head'

import {Hero} from "../components/hero/Hero";
import styles from '../styles/index.module.scss'
import {LongStory} from "../components/longStory/LongStory";
import {Contact} from "../components/contact/Contact";
import {FloorPlans} from "../components/floorPlans/FloorPlans";
import {Gallery} from "../components/gallery/Gallery";
import {Map} from "../components/map/Map";
import {Footer} from "../components/footer/Footer";

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
        <Footer/>
      </div>
    </div>
  )
}
