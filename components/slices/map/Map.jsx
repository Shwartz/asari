import React from "react";
import styles from './Map.module.scss';
import Image from "next/image";
import ModalImage from "react-modal-image";

export const Map = () => {
  return (
    <section className={styles.map}>
      <div className={styles.block}>
        <h1>Atrašanās vieta</h1>
        <p>Īpašums atrodas Induļa ielā 6, Asaros, Jūrmalā.<br/>
        </p>
        <ul>
          <li>Veikals, restorāns, stacija: 5 minūtes</li>
          <li>Jūra: 7 minūtes</li>
          <li>Rimi/Maxima ar mašīnu: 8 minūtes</li>
          <li>Majoru stacija ar mašīnu: 10 minūtes</li>
          <li>Lidosta: 25 minūtes</li>
          <li>Rīga: 35 minūtes</li>
        </ul>

        <ModalImage
          small={'/gallery/asari_26_thumb.jpg'}
          large={'/gallery/asari_26.jpg'}
          alt="Mājas 1. stāva plāns."
          hideDownload={true}
          hideZoom={false}
        />
      </div>
      <div className={styles.wide} id="map">
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
    </section>
  );
}

// https://account.mapbox.com/auth/signin/
