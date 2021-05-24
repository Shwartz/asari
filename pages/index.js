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
    <>
      <Head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PJ5PSL4');`
        }}/>
        <title>Iegādājies māju Jūrmalā</title>
        <meta name="description" content="Pārdodas daudzīvokļu nams Jūrmalā tikai 10 minūtes no jūras"/>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap" rel="stylesheet"/>
      </Head>

      <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PJ5PSL4"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}/>
      <div className={styles.container}>

        <Hero/>
        <Map/>
        <DetailMap/>
        <FloorPlans/>
        {load ? <Gallery/> : <p>Loading Gallery ...</p>}
        <LongStory/>
        <Footer/>
      </div>
    </>
  )
}
