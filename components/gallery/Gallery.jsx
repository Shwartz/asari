import styles from './Gallery.module.scss';
import ImageGallery from "react-image-gallery";
import Image from 'next/image'

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

export const Gallery = () => {

  return (
    <section className={styles.gallery}>
      <div className={styles.block}>
        <ImageGallery items={images}/>
      </div>
    </section>
  )
}
