import React from "react";
import styles from './Map.module.scss';
import Image from "next/image";
import ModalImage from "react-modal-image";
import {Section} from "../../section/Section";

export const Map = () => {
  return (
    <Section bgColor='#fafafa'>

      <div className={styles.flex}>

        <div className={styles.blockText}>
          <h1 className={styles.title}>Atrašanās vieta</h1>
          <dl className={styles.gridDefinitionTerm}>
            <dt>Addrese:</dt>
            <dd>Induļa iela 6, Asari</dd>
            <dt>Veikals un stacija<br/>ar kājām:</dt>
            <dd>5 minūtes</dd>
            <dt>Jūra ar kājām:</dt>
            <dd>7 minūtes</dd>
            <dt>Rimi/Maxima ar auto:</dt>
            <dd>10 minūtes</dd>
            <dt>Majoru stacija ar auto:</dt>
            <dd>10 minūtes</dd>
            <dt>Lidosta:</dt>
            <dd>25 minūtes</dd>
            <dt>Rīga:</dt>
            <dd>35 minūtes</dd>
          </dl>
        </div>

        <div className={styles.sixteenNine}>
          <div className={styles.content}>
            <a
              href="http://bit.ly/map-asari"
              className={styles.mapLink}
              title="Atvērt Google Map"
              rel="noopener noreferrer"
              target="_blank">

              <Image
                src="/img/map-jurmala.jpg"
                alt="Induļu ielas 6 mājas atrašanās vieta kartē"
                width={1500}
                height={831}
              />

              <div className={styles.openIcn}>
              <Image
                src="/icn/open-new-tab.png"
                alt="Atver linku jaunā lapā"
                width={60}
                height={51}
              />
              </div>
            </a>
          </div>
        </div>

      </div>
    </Section>
    /*<section className={styles.map}>
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
    </section>*/
  );
}

// https://account.mapbox.com/auth/signin/
