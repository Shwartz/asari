import styles from './FloorPlans.module.scss';
import Image from 'next/image'
import {Section} from "../../section/Section";
import ModalImage from "react-modal-image";

export const FloorPlans = () => {

  return (
    <Section bgColor='#f7fafd'>
      <h1 id='floor-plans' className={styles.title}>Dzīvokļu plāni</h1>
      <div className={styles.flex}>
        <div>
          <h3>Otrā stāva plāns</h3>
          <div className={styles.text}>
            <p>Otrajā stāvā ir dzīvokļi Nr 4, 5 un 6.</p>
            <p>Pārdodas visi trīs dzīvokļi</p>
            <p>Kopējā platība: 51.5m2</p>
            <p>4.dz - vienas istabas dzīvoklis ar 35.5m2</p>
            <p>5.dz - divu istabu dzīvoklis ar 50.7m2</p>
            <p>6.dz - trīs istabu dzīvoklis ar 68.9m2</p>
          </div>
          <div className={styles.imgWrap}>
            <div className={styles.openIcn}>
              <Image
                src="/icn/icn-open-img.svg"
                alt="Atvērt pirmā stāva plānu pilnā izmērā"
                width={40}
                height={40}
              />
            </div>
            <ModalImage
              small={'/img/floor-plan-2-600.jpg'}
              large={'/img/floor-plan-2.jpg'}
              alt="Mājas otrā stāva plāns ar 4., 5. un 6. dzīvokli."
              hideDownload={true}
              hideZoom={false}
            />
          </div>
        </div>
        <div>
          <h3>Pirmā stāva plāns</h3>
          <div className={styles.text}>
            <p>Pirmajā stāvā ir dzīvokļi Nr 1, 2 un 3.</p>
            <p>Pārdodas divu istabu dzīvoklis Nr 1. </p>
            <p>Kopējā platība: 51.5m2</p>
          </div>
          <div className={styles.imgWrap}>
            <div className={styles.openIcn}>
              <Image
                src="/icn/icn-open-img.svg"
                alt="Atvērt pirmā stāva plānu pilnā izmērā"
                width={40}
                height={40}
              />
            </div>
            <ModalImage
              small={'/img/floor-plan-1-600.jpg'}
              large={'/img/floor-plan-1.jpg'}
              alt="Mājas pirmā stāva plāns ar 1., 2. un 3. dzīvokli."
              hideDownload={true}
              hideZoom={false}
            />
          </div>
        </div>

      </div>
    </Section>
  )
}
