import styles from './Contact.module.scss';

export const Contact = () => {

  return (
    <section className={styles.contact} id='contact-me'>
      <div className={styles.block}>
        <h1>
          Iegādājies māju ar dzīvokļiem Jurmalā <br/><b>&euro;150 000</b>
        </h1>

        <dl className={styles.dl}>
          <dt>Raksti:</dt>
          <dd>e-pasts</dd>
          <dt>Zvani:</dt>
          <dd>Telefons/Whatsapp <a title="Atvērs Whatsapp aplikāciju" href="https://wa.me/447725538871?text=Labdien,%20Man%20gribētos%20precizēt%20par%20māju%20Asaros.">zvani</a></dd>
        </dl>

        <p className={styles.smallText}>Zvanīt lūdzu pēc 19:00</p>
      </div>
    </section>
  )
}
