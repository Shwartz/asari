import styles from './DetailMap.module.scss';
import {Section} from "../../section/Section";
import ModalImage from "react-modal-image";
import Image from "next/image";

export const DetailMap = () => {
  return (
    <Section bgColor='#fff'>
      <h1 className={styles.title}>Mājas informācija</h1>
      <div className={styles.flex}>
        <div className={styles.blockText}>
          <dl className={styles.gridDefinitionTerm}>
            <dt>Dzīvokļu kopējā platība:</dt>
            <dd>206m2</dd>
            <dt>Zemes platība:</dt>
            <dd>1556m2</dd>
            <dt>Mājas stāvi:</dt>
            <dd>2</dd>
            <dt>Dzīvokļu skaits:</dt>
            <dd>4</dd>
            <dt>Pilsētas ūdensvads:</dt>
            <dd>Ir</dd>
            <dt>Pilsētas kanalizācija:</dt>
            <dd>Ir</dd>
            <dt>Jumts:</dt>
            <dd>Skārda</dd>
            <dt>Uzcelta:</dt>
            <dd>1980</dd>
            <dt>Nojume mašīnai:</dt>
            <dd>Ir</dd>
            <dt>Īpašnieki:</dt>
            <dd>2 (<a href="#more-info">uzzini vairāk</a>)</dd>
          </dl>
        </div>
        <div className={`${styles.imgWrap} track_estateArea`}>
          <div className={styles.openIcn}>
            <Image
              src="/icn/icn-open-img.svg"
              alt="Induļu ielas 6 detālplāns"
              width={40}
              height={40}
            />
          </div>
          <ModalImage
            small={'/img/detailMap.jpg'}
            large={'/img/detailMapx2.jpg'}
            alt="Mājas Induļa ielā 6 detālplāns"
            hideDownload={true}
            hideZoom={false}
          />
        </div>
      </div>
    </Section>
  )
}
