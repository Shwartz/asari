import Head from 'next/head'
import Image from 'next/image'
import ImageGallery from 'react-image-gallery';

import {Hero} from "../components/hero/Hero";
import styles from '../styles/index.module.scss'
import {Intro} from "../components/intro/Intro";
import {Price} from "../components/price/Price";
import {Empty} from "../components/empty/Empty";
import {FloorPlans} from "../components/floorPlans/FloorPlans";

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

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
        <div>
          <ImageGallery items={images} />;
        </div>
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
