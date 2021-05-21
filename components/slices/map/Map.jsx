import React from "react";
import styles from './Map.module.scss';
import Image from "next/image";
import ModalImage from "react-modal-image";
import {Section} from "../../section/Section";
import {NineSixteen} from "../../nineSixteen/NineSixteen";

export const Map = () => {
  return (
    <Section bgColor='#fafafa'>

      <div className={styles.flex}>

        <div className={styles.blockText}>
          {/*<h1 className={styles.title}>Atrašanās vieta</h1>*/}
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

        <NineSixteen>
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
        </NineSixteen>

      </div>
    </Section>
    /*
        <ModalImage
          small={'/gallery/asari_26_thumb.jpg'}
          large={'/gallery/asari_26.jpg'}
          alt="Mājas 1. stāva plāns."
          hideDownload={true}
          hideZoom={false}
        />
     */
  );
}
