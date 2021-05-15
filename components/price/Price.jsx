import styles from './Price.module.scss';

export const Price = () => {

  return (
    <section className={styles.price}>
      <div className={styles.block}>
        <p className={styles.largeText}>
          Tavs īpašums par <b>&euro;148,995</b>
        </p>
        <p>Zvani: Telefons/Whatsapp,<br/>
          raksti: e-pasts</p>
        <p className={styles.smallText}>Zvanīt lūdzu pēc 19:00,<br/> pa dienu pie virpas, nevaru runāt!</p>
      </div>
    </section>
  )
}
