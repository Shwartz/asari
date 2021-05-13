import {useScroll} from "../hooks/useScroll";
import styles from './Hero.module.scss';

export const Hero = () => {
  const {scrollY} = useScroll();
  console.log(scrollY);

  return (
    <section className={styles.hero} style={{top: `${-(scrollY*0.0315)}rem`}}>
      <h1 style={{top: `${-(scrollY*0.005)}rem`, opacity: 1-(scrollY*0.00175)}}>Super smuks uzraksts, rūķiši dzīvo! Tie ir Glāzšķūņa rūķīši</h1>
    </section>
  )
}
