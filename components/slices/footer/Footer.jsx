import styles from './Footer.module.scss';
import {Section} from "../../section/Section";

export const Footer = () => {

  return (
    <Section bgColor='#fff'>
      <footer id="contact-me" className={styles.footer}>
        <dl className={styles.gridDefinitionTerm}>
          <dt>e-pasts:</dt>
          <dd>
            <a
              href="mailto:info@manajurmala.lv?subject=Par%20īpašumu%20Asaros&body=Labdien,%20Es%20vēlētos%20precizēt%20par%20māju%20Asaros.">info@manajurmala.lv</a>
          </dd>
          <dt>Telefons:</dt>
          <dd><a href="tel:+37128753239">+37128753239</a></dd>
          <dt>Whatsapp:</dt>
          <dd><a title="Atvērs Whatsapp aplikāciju"
                 href="https://wa.me/447725538871?text=Labdien,%20Man%20gribētos%20precizēt%20par%20māju%20Asaros.">Čats</a>
          </dd>
        </dl>
        <p className={styles.context}>
          <a href="#floor-plans">Dzīvokļu plāni</a><br/>
          <a href="#map">Karte</a><br/>
        </p>

        <a href='#contact-me' className={styles.contactMe}>Sazināties ar īpašnieku</a>
      </footer>
    </Section>
  )
}
