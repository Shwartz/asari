import styles from './ContactMe.module.scss';
import Image from "next/image";

export const ContactMe = () => {
  return (
    <div className={styles.contactMe}>
      <div className={styles.wrap}>
        Sazināties:
        <a
          href="mailto:info@manajurmala.lv?subject=Par%20īpašumu%20Asaros&body=Labdien,%20Es%20vēlētos%20precizēt%20par%20māju%20Asaros."
          className='track_sendEmail_footer track_sendEmail_hover'
        >
          <Image
            src="/icn/iconfinder_social-media_email_new_5066047.svg"
            alt="e-pasts: info@manajurmala.lv"
            width={48}
            height={48}
          />
        </a>
        {/*<a
          title="Atvērs Whatsapp aplikāciju"
          href="https://wa.me/37128753239?text=Labdien,%20Man%20gribētos%20precizēt%20par%20māju%20Asaros."
          className='track_callPhone_footer track_callPhone_hover'
        >
          <Image
            src="/icn/iconfinder_social-media_whatsapp_1994550.svg"
            alt="Telefons: +37128753239"
            width={48}
            height={48}
          />
        </a>*/}
        <a
          href="tel:+37128753239"
          className='track_whatsappChat_footer track_whatsappChat_hover'
        >
          <Image
            src="/icn/iconfinder_social-media_viber_1994551.svg"
            alt="Telefons: +37128753239"
            width={48}
            height={48}
          />
        </a>
      </div>
    </div>
  )
}

/***
 * Guache
 * Beautiful icons: https://www.iconfinder.com/icons/5066047/communication_email_envelope_letter_mail_message_social_media_icon
 */
