import styles from './LongStory.module.scss';
import Image from "next/image";
import {Section} from "../../section/Section";

export const LongStory = () => {

  return (
    <>
      <Section bgColor='#fff'>
        <div className={styles.flex} id='more-info'>
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
            <p>Tikai 10 minūšu brauciena attālumā ir Rimi, Maxima un Kauguru tirgus. Tāpat netālu ir vairākas
              skolas. (Pumpuri, Sloka). Poliklīnika Kauguros un Dubultos, blakus ir rehabilitācijas centrs Vaivari. </p>
            <p>Ir nojume mašīnai un plašs, iekopts dārzs.</p>
          </div>
        </div>
      </Section>
      <Section bgColor='#f7fafd'>
        <div className={`${styles.flex} ${styles.reverse}`}>
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
            <p>Īpašums ir celts 1980 gadā, koka divstāvu konstrukcija. Jumts nomainīts pirms gadiem septiņiem, kopā ar
              tā maiņu tika atjaunoti skursteņi.</p>
            <p>Īpašumam ir divi īpašnieki un viens pārdod visas savas domājamās daļas.</p>
            <p>Īpašums sastāv no 6 dzīvokļiem, no tiem pārdodas 4 dzīvokļi ar kopējo platību 206m2 un zeme 1556m2</p>
            <p>Pārdodas 1.dz, 4.dz, 5.dz un 6.dz, respektīvi, viss otrais stāvs un 1. dzīvoklis no pirmā stāva</p>
            <p><b>Visas domājamās daļas ir atrunātas, atzīmētas plānā un ar līgumu pievienotas Zemes grāmatā.</b></p>
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
            <p>Visi dzīvokļi tika izremontēti pirms apmēram 10 gadiem. Tika nomainīti visi logi un katrā iekārtota
              autonoma ūdens sildīšana, pilsētas ūdens un kanalizācija. Faktiski, visi dzīvokļi sagatavoti ar visu
              nepieciešamo iedzīvei (veļasmašīnas, santehnika, dušas, virtuve, mēbeles.)</p>
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
            <p>Šis īpašums, pateicoties lokācijai, ir perspektīvs investīciju objekts kuru var pārvērst B&amp;B.
              Protams,
              mājai ir nepieciešams
              ieguldījums, bet to var darīt arī pakāpeniski</p>
            <p>Dārza teritorija ir pietiekami liela (1500m2) un tur radoši cilvēki varētu atrast interesantu
              pielietojumu</p>
            <p>Iespējams, kāda liela ģimene šo māju saskatītu kā iespēju aizmukt no pilsētas un izveidot radošu
              vietu.</p>
          </div>
        </div>
      </Section>

    </>
  )
}
