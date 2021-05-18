import styles from './Footer.module.scss';

export const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.block}>
        <p>
          <a href="#floor-plans">Dzīvokļu plāni</a><br/>
          <a href="#map">Karte</a><br/>
          <a href="#contact-me">Sazināties ar īpašnieku</a><br/>
        </p>
      </div>
      {/*<p>Iedvesmai: https://senite.latio.lv/en/home-page-english/</p>
      <p>Iedvesmai: https://m.city24.lv/real-estate/houses-for-sale/Jurmala-Indula-iela/5449981/</p>*/}
      <a href='#contact-me' className={styles.contactMe}>Sazināties ar īpašnieku</a>
    </footer>
  )
}
