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
  const opacityValue = (coef) => {
    if (coef <=0 ) {
      return 0;
    } else if (coef >= 1) {
      return 1;
    } else {
      return coef;
    }
  }

  return (
    <section className={styles.hero} style={{transform: `translate3d(0, ${calcTranslate(0.05)}, 0)`}}>
      <h1 style={{transform: `translate3d(0, ${calcTranslate(0.5)}, 0)`, opacity: opacityValue(opacityCoef)}}>
        Iegādājies māju ar dzīvokļiem Jūrmalā
      </h1>
    </section>
  )
}
