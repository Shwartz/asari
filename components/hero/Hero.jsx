import {useScroll} from "../hooks/useScroll";
import styles from './Hero.module.scss';

export const Hero = () => {
  const {scrollY} = useScroll();
  console.log(scrollY);

  return (
    <section className={styles.hero} style={{transform: `translate3d(0, ${-(scrollY*0.05)}px, 0)`}}>
      <h1 style={{transform: `translate3d(0, ${-(scrollY*0.5)}px, 0)`, opacity: 1-(scrollY*0.00175)}}>Super smuks uzraksts, rūķiši dzīvo! Tie ir Glāzšķūņa rūķīši</h1>
    </section>
  )
}
