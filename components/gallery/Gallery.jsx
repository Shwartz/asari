import styles from './Gallery.module.scss';
import ImageGallery from "react-image-gallery";
import Image from 'next/image'

const images = [
  {
    original: '/gallery/IMG_7344_m.jpg',
    thumbnail: '/gallery/IMG_7344_thumb.jpg',
  },
  {
    original: '/gallery/IMG_7345_m.jpg',
    thumbnail: '/gallery/IMG_7345_thumb.jpg',
  },
  {
    original: '/gallery/IMG_7347_m.jpg',
    thumbnail: '/gallery/IMG_7347_thumb.jpg',
  },
  {
    original: '/gallery/IMG_7348_m.jpg',
    thumbnail: '/gallery/IMG_7348_thumb.jpg',
  },
  {
    original: '/gallery/IMG_7349_m.jpg',
    thumbnail: '/gallery/IMG_7349_thumb.jpg',
  },
  {
    original: '/gallery/IMG_7351_m.jpg',
    thumbnail: '/gallery/IMG_7351_thumb.jpg',
  },
  {
    original: '/gallery/IMG_7356_m.jpg',
    thumbnail: '/gallery/IMG_7356_thumb.jpg',
  },
  {
    original: '/gallery/IMG_7358_m.jpg',
    thumbnail: '/gallery/IMG_7358_thumb.jpg',
  },
  {
    original: '/gallery/IMG_7360_m.jpg',
    thumbnail: '/gallery/IMG_7360_thumb.jpg',
  },

];

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
