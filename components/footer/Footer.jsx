import styles from './Footer.module.scss';

export const Footer = () => {

  return (
    <footer className={styles.footer}>
      {/*<p>Iedvesmai: https://senite.latio.lv/en/home-page-english/</p>
      <p>Iedvesmai: https://m.city24.lv/real-estate/houses-for-sale/Jurmala-Indula-iela/5449981/</p>*/}
      <a href='#contact-me' className={styles.contactMe}>Sazināties ar īpašnieku</a>
    </footer>
  )
}
