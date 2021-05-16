import styles from './Contact.module.scss';

export const Contact = () => {

  return (
    <section className={styles.contact} id='contact-me'>
      <div className={styles.block}>
        <h1>
          Tavs īpašums par <b>&euro;148,995</b>
        </h1>

        <dl className={styles.dl}>
          <dt>Raksti:</dt>
          <dd>e-pasts</dd>
          <dt>Zvani:</dt>
          <dd>Telefons/Whatsapp</dd>
        </dl>

        <p className={styles.smallText}>Zvanīt lūdzu pēc 19:00,<br/> pa dienu pie virpas, runāt nevaru!</p>
      </div>
    </section>
  )
}
