import styles from './Gallery.module.scss';
import ImageGallery from "react-image-gallery";
import {Section} from "../../section/Section";

const imgNrArr = '01, 04, 06, 15, 17, 20, 21, 22, 26, 29, 31, 33, 34, 37, 38, 42, 45, 46, 49, 07, 13, 11, 50, 03, 05';
const imgTemplate = (nr) => {
  return {
    original: `/gallery/asari_${nr}.jpg`,
    thumbnail: `/gallery/asari_${nr}_thumb.jpg`
  }
}
const images = imgNrArr.split(',').map(nr => imgTemplate(nr.trim()));

// Vertical images
// 02, 12, 19, 24, 28, 35

const Gallery = () => {

  return (
    <Section bgColor='#20344C'>
      <h1 className={styles.title}>Bilžu galerija</h1>
      <ImageGallery
        items={images}
        lazyLoad={true}
      />
      <p className={styles.link}>
        <a
          href="https://www.city24.lv/lv/nekustamais-ipasums/pardod-maju/Jurmala/5449981;jsessionid=AC9966B47BE0418BA41CB18EC64CA33E?useFullVersion=#_gallery-group-01"
          title="Atvērt bilžu galeriju city24 vietnē"
          rel="noopener noreferrer"
          target="_blank"
          className='track_externalLink_city24'
        >
          Papildus bildes vietnē city24.lv</a>
      </p>
    </Section>
  )
}

export default Gallery;

/*
* w:1200 h:720
* w:250 h:150
* */
