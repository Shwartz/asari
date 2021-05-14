import {useScroll} from "../hooks/useScroll";
import styles from './Hero.module.scss';

export const Hero = () => {
  const {scrollY} = useScroll();
  const yAxis = isNaN(scrollY) ? 0 : scrollY;

  return (
    <section className={styles.hero} style={{transform: `translate3d(0, ${-(yAxis * 0.05)}px, 0)`}}>
      <h1 style={{transform: `translate3d(0, ${-(yAxis * 0.5)}px, 0)`, opacity: 1 - (yAxis * 0.00175)}}>
        Pārdodam māju ar dzīvokļiem Jūrmalā
      </h1>
    </section>
  )
}
