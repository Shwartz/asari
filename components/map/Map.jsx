import React from "react";
import ReactMapGL from 'react-map-gl';
import styles from './Map.module.scss';
import Image from "next/image";

export const Map = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 41.5868,
    longitude: -93.625,
    zoom: 13,
  });

  return (
    <section className={styles.map}>
      <div className={styles.block}>
        <h1>Atrašanās vieta</h1>
        <p>Īpašums atrodas Induļa ielā 6, Asaros, Jūrmalā.<br/>
          <a
            href="http://bit.ly/map-asari"
            title="Atvērt Google Map"
            rel="noopener noreferrer"
            target="_blank"> Apskatīt kartē
          </a>
        </p>
        <ul>
          <li>Veikals, restorāns, stacija: 5 minūtes</li>
          <li>Jūra: 8 minūtes</li>
          <li>Rimi/Maxima ar mašīnu: 7 minūtes</li>
          <li>Majoru stacija ar mašīnu: 8 minūtes</li>
          <li>Lidosta: 25 minūtes</li>
          <li>Rīga: 35 minūtes</li>
        </ul>
      </div>
      <div className={styles.wide}>
        <a
          href="http://bit.ly/map-asari"
          title="Atvērt Google Map"
          rel="noopener noreferrer"
          target="_blank">
          <Image
            src="/img/map-jurmala.jpg"
            alt="Induļu ielas 6 mājas atrašanās vieta kartē"
            width={1500}
            height={831}
          />
        </a>
      </div>

      {/* <ReactMapGL
          {...viewport}
          width="100%"
          height="100%"
          onViewportChange={(viewport) => setViewport(viewport)}
          mapboxApiAccessToken="YOUR_MAPBOX_TOKEN_HERE"
        />*/}

    </section>
  );
}

// https://account.mapbox.com/auth/signin/
