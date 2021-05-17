import styles from './LongStory.module.scss';
import Image from "next/image";

export const LongStory = () => {

  return (
    <section className={styles.longStory} id='more-info'>
      <div className={styles.block}>
        <div className={styles.flex}>
          <div className={styles.center}>
            <Image
              src="/gallery/asari_01.jpg"
              alt="Induļa 6 mājas pirmais stāva plāns"
              width={1500}
              height={935}
            />
          </div>
          <div>
            <h3>Īpašums</h3>
            <p>Īpašums ir celts 1980 gadā, koka divstāvu konstrukcija. Jumts nomainīts pirms gadiem septiņiem, kopā ar
              tā maiņu tika atjaunoti skursteņi.</p>
            <p>Īpašumam ir divi īpašnieki un viens pārdod visas savas domājamās daļas.</p>
            <p>Īpašums sastāv no 6 dzīvokļiem, no tiem pārdodas 4 dzīvokļi ar kopējo platību 206m2 un zeme 1556m2</p>
            <p>Pārdodas 1.dz, 4.dz, 5.dz un 6.dz, respektīvi, viss otrais stāvs un 1. dzīvoklis no pirmā stāva</p>
            <p>Visas domājamās daļas ir atrunātas, atzīmētas plānā un ar līgumu pievienotas Zemes grāmatā.</p>
          </div>
        </div>
        <div className={`${styles.flex} ${styles.reverse}`}>
          <div className={styles.center}>
            <Image
              src="/gallery/asari_01.jpg"
              alt="Induļa 6 mājas pirmais stāva plāns"
              width={1500}
              height={935}
            />
          </div>
          <div>
            <h3>Vieta</h3>
            <p>Īpašums atrodas pretī parkam, kurā ir labiekārtots bērnu laukumiņš. Stacija un veikals 5 min
              gājiena attālumā. Pretī veikalam ir armēņu restorāns ar izcilu virtuvi. Līdz jūrai 7 minūtes.</p>
            <p>Tikai 10 minūšu brauciena attālumā ir Rimi, Maxima un Kauguru tirgus. Tāpat netālu ir vairākas
              skolas. (Pumpuri, Sloka). Poliklīnika Kauguros un Dubultos, blakus ir rehabilitācijas centrs Vaivari. </p>
            <p>Ir nojume mašīnai un plašs, iekopts dārzs.</p>
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.center}>
            <Image
              src="/gallery/asari_01.jpg"
              alt="Induļa 6 mājas pirmais stāva plāns"
              width={1500}
              height={935}
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
        <div className={`${styles.flex} ${styles.reverse}`}>
          <div className={styles.center}>
            <Image
              src="/gallery/asari_01.jpg"
              alt="Induļa 6 mājas pirmais stāva plāns"
              width={1500}
              height={935}
            />
          </div>
          <div>
            <h3>Perspektīva</h3>
            <p>Šis īpašums, pateicoties lokācijai, ir perspektīvs investīciju objekts kuru var pārvērst B&amp;B. Protams, mājai ir nepieciešams
              ieguldījums, bet to var darīt arī pakāpeniski</p>
            <p>Dārza teritorija ir pietiekami liela (1500m2) un tur radoši cilvēki varētu atrast interesantu pielietojumu</p>
            <p>Iespējams, kāda liela ģimene šo māju saskatītu kā iespēju aizmukt no pilsētas un izveidot radošu vietu.</p>
          </div>
        </div>
        <p>
          <a
            href="https://www.city24.lv/lv/nekustamais-ipasums/pardod-maju/Jurmala/5449981;jsessionid=AC9966B47BE0418BA41CB18EC64CA33E?useFullVersion=#_gallery-group-01"
            title="Atvērt bilžu galeriju city24 vietnē"
            rel="noopener noreferrer"
            target="_blank"
          >
            Papildus bildes vietnē city24.lv</a>
        </p>
      </div>
    </section>
  )
}
