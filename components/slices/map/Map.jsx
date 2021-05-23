import React from "react";
import styles from './Map.module.scss';
import Image from "next/image";
import {Section} from "../../section/Section";
import {NineSixteen} from "../../nineSixteen/NineSixteen";

export const Map = () => {
  return (
    <Section bgColor='#f7fafd'>
      <div className={styles.flex}>
        <div className={styles.blockText}>
          <dl className={styles.gridDefinitionTerm}>
            <dt>Adrese:</dt>
            <dd>Induļa iela 6, Asari</dd>
            <dt>Veikals un stacija<br/>ar kājām:</dt>
            <dd>5 minūtes</dd>
            <dt>Jūra ar kājām:</dt>
            <dd>7 minūtes</dd>
            <dt>Rimi/Maxima ar auto:</dt>
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
            id='map'
            className={styles.mapLink}
            title="Atvērt Google Map"
            rel="noopener noreferrer"
            target="_blank">
            <Image
              src="/img/map-jurmala-icn-big.jpg"
              alt="Induļu ielas 6 mājas atrašanās vieta kartē"
              width={1216}
              height={684}
            />
            <div className={styles.openIcn}>
              <Image
                src="/icn/icn-open-img.svg"
                alt="Atver karti ar Induļu ielas 6 māju jaunā pārlūka lapā"
                width={40}
                height={40}
              />
            </div>
          </a>
        </NineSixteen>
      </div>
    </Section>
  );
}
