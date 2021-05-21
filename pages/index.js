import Head from 'next/head'
import {LongStory} from "../components/slices/longStory/LongStory";
import {Contact} from "../components/slices/contact/Contact";
import {FloorPlans} from "../components/slices/floorPlans/FloorPlans";
import {Gallery} from "../components/slices/gallery/Gallery";
import {Map} from "../components/slices/map/Map";
import {Footer} from "../components/slices/footer/Footer";
import styles from '../styles/index.module.scss'
import {Hero} from "../components/slices/hero/Hero";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Iegādājies māju Jūrmalā</title>
        <meta name="description" content="Pārdodas daudzīvokļu nams Jūrmalā tikai 10 minūtes no jūras"/>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap" rel="stylesheet"/>
      </Head>

      <Hero/>
      <Map/>
      <Contact/>
      <FloorPlans/>
      <Gallery/>
      <LongStory/>
      <Footer/>

    </div>
)
}
