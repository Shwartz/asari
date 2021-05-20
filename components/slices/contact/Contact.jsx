import styles from './Contact.module.scss';

export const Contact = () => {

  return (
    <section className={styles.contact} id='contact-me'>
      <div className={styles.block}>
        <h1>
          Iegādājies māju ar dzīvokļiem Jurmalā <br/><b>&euro;150 000</b>
        </h1>

        <dl className={styles.dl}>
          <dt>e-pasts:</dt>
          <dd>
            <a href="mailto:info@manajurmala.lv?subject=Par%20īpašumu%20Asaros&body=Labdien,%20Es%20vēlētos%20precizēt%20par%20māju%20Asaros.">info@manajurmala.lv</a>
          </dd>
          <dt>Whatsapp:</dt>
          <dd><a title="Atvērs Whatsapp aplikāciju" href="https://wa.me/447725538871?text=Labdien,%20Man%20gribētos%20precizēt%20par%20māju%20Asaros.">Čats</a></dd>
          <dt>Telefons:</dt>
          <dd><a href="tel:+37128753239">+37128753239</a></dd>
        </dl>

        <p className={styles.smallText}>Zvanīt lūdzu pēc 19:00</p>
      </div>
    </section>
  )
}
