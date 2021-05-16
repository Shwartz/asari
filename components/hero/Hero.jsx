import {useScroll} from "../hooks/useScroll";
import styles from './Hero.module.scss';

export const Hero = () => {
  const {scrollY} = useScroll();
  const yAxis = isNaN(scrollY) ? 0 : scrollY;
  const calcTranslate = (coef) => {
    if (yAxis > 1300) {
      return '0';
    }

    return yAxis <= 0 ? 0 : `-${yAxis * coef}px`;
  }

  const opacityCoef = 1 - (yAxis * 0.00175);
  const opacityValue = (opacityCoef <= 0 || opacityCoef >= 1) ? 0 : opacityCoef;

  return (
    <section className={styles.hero} style={{transform: `translate3d(0, ${calcTranslate(0.05)}, 0)`}}>
      <h1 style={{transform: `translate3d(0, ${calcTranslate(0.5)}, 0)`, opacity: opacityValue}}>
        Pārdodas māja ar dzīvokļiem Jūrmalā
      </h1>
    </section>
  )
}
