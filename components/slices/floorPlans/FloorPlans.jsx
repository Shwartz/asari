import styles from './FloorPlans.module.scss';
import Image from 'next/image'

export const FloorPlans = () => {

  return (
    <section className={styles.FloorPlans}>
      <div className={styles.block}>
        <h1>Mājas informācija</h1>
        <dl className={styles.dl}>
          <dt>Dzīvokļu kopējā platība:</dt>
          <dd>206m2</dd>
          <dt>Zemes platība:</dt>
          <dd>1556m2</dd>
          <dt>Mājas stāvi:</dt>
          <dd>2</dd>
          <dt>Dzīvokļu skaits:</dt>
          <dd>4</dd>
          <dt>Pilsētas ūdensvads:</dt>
          <dd>Ir</dd>
          <dt>Pilsētas kanalizācija:</dt>
          <dd>Ir</dd>
          <dt>Jumts:</dt>
          <dd>Skārda</dd>
          <dt>Uzcelta:</dt>
          <dd>1980</dd>
          <dt>Nojume mašīnai:</dt>
          <dd>Ir</dd>
          <dt>Īpašnieki:</dt>
          <dd>2 (<a href="#more-info">uzzini vairāk</a>)</dd>
        </dl>
        <div id="floor-plans">
          <p>Pirmais stāvs, dzīvoklis Nr. 1.</p>
          <Image
            src="/img/floor-plan-1.jpg"
            alt="Induļa 6 mājas pirmais stāva plāns"
            width={1500}
            height={935}
          />
          <p className={styles.mt24}>Otrais stāvs, dzīvokļi Nr. 4, 5 un 6.</p>
          <Image
            src="/img/floor-plan-2.jpg"
            alt="Induļa 6 mājas otrais stāva plāns"
            width={1500}
            height={819}
          />
        </div>
        <p className={styles.italic}>Plāniem ir ilustratīva nozīme.</p>
      </div>
    </section>
  )
}
