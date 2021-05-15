import styles from './FloorPlans.module.scss';
import Image from 'next/image'

export const FloorPlans = () => {

  return (
    <section className={styles.FloorPlans}>
      <div className={styles.block}>
        <h1>Tehniskais apraksts</h1>
        <dl className={styles.dl}>
          <dt>Mājas kopējā platība:</dt>
          <dd>10000m2</dd>
          <dt>Zemes platība:</dt>
          <dd>100000m2</dd>
          <dt>Mājas stāvi:</dt>
          <dd>2</dd>
          <dt>Dzīvokļu skaits:</dt>
          <dd>4</dd>
          <dt>Pilsētas ūdensvads:</dt>
          <dd>Ir</dd>
          <dt>Nojume mašīnai:</dt>
          <dd>Ir</dd>
          <dt>Pirts:</dt>
          <dd>Ir, bet prasa uzlabojumus</dd>
          <dt>Īpašnieki:</dt>
          <dd>2 [uzzini vairāk]</dd>
        </dl>
        <Image
          src="/img/floor-plans-1200.jpg"
          alt="Pirmā stāva plāns"
          width={1200}
          height={744}
        />
        <br/>
        <Image
          src="/img/floor-plans-1200.jpg"
          alt="Pirmā stāva plāns"
          width={1200}
          height={744}
        />
      </div>
    </section>
  )
}
