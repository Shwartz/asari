import React, {useEffect, useState} from "react";
import dynamic from 'next/dynamic';
import Head from 'next/head';

import {LongStory} from "../components/slices/longStory/LongStory";
import {FloorPlans} from "../components/slices/floorPlans/FloorPlans";
const Gallery = dynamic(() => import('../components/slices/gallery/Gallery'))
import {Map} from "../components/slices/map/Map";
import {Footer} from "../components/slices/footer/Footer";
import styles from '../styles/index.module.scss'
import {Hero} from "../components/slices/hero/Hero";
import {DetailMap} from "../components/slices/detailMap/DetailMap";

export default function Home() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
  }, [])

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
      <DetailMap/>
      <FloorPlans/>
      {load ? <Gallery/> : <p>Loading Gallery ...</p>}
      <LongStory/>
      <Footer/>
    </div>
)
}
