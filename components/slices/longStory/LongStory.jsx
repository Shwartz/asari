import styles from './LongStory.module.scss';
import Image from "next/image";
import {Section} from "../../section/Section";

export const LongStory = () => {

  return (
    <>
      <Section bgColor='#fff'>
        <div className={styles.flex}>
          <div className={styles.center}>
            <Image
              src="/img/asari-jura.jpg"
              alt="Jūras krasts pretī Asariem"
              width={600}
              height={450}
            />
          </div>
          <div>
            <h3>Vieta</h3>
            <p>Īpašums atrodas pretī parkam, kurā ir labiekārtots bērnu laukumiņš. Stacija un veikals 5 min
              gājiena attālumā. Pretī veikalam ir armēņu restorāns ar izcilu virtuvi.<br/> Līdz jūrai 7 minūtes.</p>
            <p>Tikai 10 minūšu brauciena attālumā ir Rimi, Maxima un Kauguru tirgus. Netālu ir vairākas skolas (Pumpuri,
              Sloka). Tuvākā poliklīnika atrodas Kauguros un Dubultos, blakus ir rehabilitācijas centrs Vaivari.</p>
            <p>Ir nojume mašīnai un plašs, iekopts dārzs.</p>
          </div>
        </div>
      </Section>
      <Section bgColor='#f7fafd'>
        <div className={`${styles.flex} ${styles.reverse}`} id='more-info'>
          <div className={styles.center}>
            <Image
              src="/img/indula-6-darzs.jpg"
              alt="Asari, Induļa 6 dārzs ar skatu uz pirtiņu un mašīnas novietni"
              width={600}
              height={450}
            />
          </div>
          <div>
            <h3>Īpašums</h3>
            <p>Īpašums ir celts 1980 gadā, koka divstāvu konstrukcija. Jumts nomainīts pirms septiņiem gadiem, kopā ar
              tā
              maiņu tika atjaunoti skursteņi.</p>
            <p>Īpašumam ir divi īpašnieki un viens īpašnieks pārdod visas savas domājamās daļas.</p>
            <p>Īpašums sastāv no 6 dzīvokļiem, no tiem pārdodas 4 dzīvokļi ar kopējo platību 206m2 un zeme 1556m2</p>
            <p>Pārdodas viss otrais stāvs - 4.dz, 5.dz un 6.dz, un 1. dzīvoklis no pirmā stāva.</p>
            <p><b>Visas domājamās daļas ir atrunātas, atzīmētas plānā un ar līgumu pievienotas Zemes grāmatā.</b></p>
            <p>Māja nav vēstures piemineklis.</p>


          </div>
        </div>
      </Section>
      <Section bgColor='#fff'>
        <div className={styles.flex}>
          <div className={styles.center}>
            <Image
              src="/img/parks.jpg"
              alt="Asaru parka labiekārtotais laukumiņš Jūrmalā"
              width={600}
              height={450}
            />
          </div>
          <div>
            <h3>Bizness</h3>
            <p>Aptuveni pirms 10 gadiem, visi dzīvokļi tika izremontēti. Tika nomainīti visi logi un katrā dzīvoklī
              iekārtota autonoma ūdens sildīšana, pilsētas ūdens un kanalizācija. Faktiski, visi dzīvokļi sagatavoti ar
              visu nepieciešamo iedzīvei (veļasmašīnas, santehnika, dušas, virtuve, mēbeles.)</p>
            <p>Šobrīd otrais stāvs tiek katru gadu izzīrēts vasaras mēnešiem, tādejādi atpelnot ieguldītos
              līdzekļus.</p>
            <ul>
              <li>1.dz - divu istabu dzīvoklis ar 51.5m2</li>
              <li>4.dz - vienas istabas dzīvoklis ar 35.5m2</li>
              <li>5.dz - divu istabu dzīvoklis ar 50.7m2</li>
              <li>6.dz - trīs istabu dzīvoklis ar 68.9m2</li>
            </ul>
          </div>
        </div>
      </Section>
      <Section bgColor='#f7fafd'>
        <div className={`${styles.flex} ${styles.reverse}`}>
          <div className={styles.center}>
            <Image
              src="/img/perspektiva.jpg"
              alt="Asaru dārza teritorija, Induļu iela 6"
              width={600}
              height={590}
            />
          </div>
          <div>
            <h3>Perspektīva</h3>
            <p>Šis īpašums, pateicoties lokācijai, ir perspektīvs investīciju objekts.
              Māja uz doto brīdi ir dzīvojama, bet ilgtermiņā mājai ir nepieciešami ieguldījumi. Dzīvokļus var arī
              sagatavot un piedāvāt izīrēšanai Airbnb vai citās platformās.</p>
            <p>Mājai ir liela un plaša dārza teritorija (1500m2), kurai radoši cilvēki var atrast interesantu
              pielietojumu.</p>
            <p>Iespējams, kādai lielai ģimenei šī māja ir fantastiska iespēja “aizbēgt” no pilsētas un baudīt savu mieru
              un
              harmoniju pasakainajā Jūrmalā.</p>
          </div>
        </div>
      </Section>
    </>
  )
}
