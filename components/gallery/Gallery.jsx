import styles from './Gallery.module.scss';
import ImageGallery from "react-image-gallery";

const imgNrArr = '01, 03, 04, 05, 06, 07, 11, 13, 15, 17, 20, 21, 22, 26, 29, 31, 33, 34, 37, 38, 42, 45, 46, 49, 50';
const imgTemplate = (nr) => {
  return {
    original: `/gallery/asari_${nr}.jpg`,
    thumbnail: `/gallery/asari_${nr}_thumb.jpg`
  }
}
const images = imgNrArr.split(',').map(nr => {
  return imgTemplate(nr.trim());
});

// Vertical images
// 02, 12, 19, 24, 28, 35

export const Gallery = () => {

  return (
    <section className={styles.gallery}>
      <div className={styles.block}>
        <ImageGallery
          items={images}
          lazyLoad={true}
        />
      </div>
    </section>
  )
}

/*
* w:1200 h:720
* w:250 h:150
* */
