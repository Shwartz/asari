import styles from './DetailMap.module.scss';
import {Section} from "../../section/Section";
import {NineSixteen} from "../../nineSixteen/NineSixteen";
import ModalImage from "react-modal-image";


export const DetailMap = () => {

  return (
    <Section bgColor='#fff'>
      <div className={styles.flex}>
        <div className={styles.blockText}>
          <p>Block text</p>
        </div>
        <NineSixteen>
          <ModalImage
            small={'/img/detailMap.jpg'}
            large={'/img/detailMapx2.jpg'}
            alt="Mājas Induļa ielā 6 detālplāns"
            hideDownload={true}
            hideZoom={false}
          />
        </NineSixteen>
      </div>
    </Section>
  )
}
