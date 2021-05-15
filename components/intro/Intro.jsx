import styles from './Intro.module.scss';

export const Intro = () => {

  return (
    <section className={styles.intro}>
      <div className={styles.block}>
        <p>
          Pārdodas māja ar ideālu lokāciju Jūrmalā, Asaros, pretī parkam. Tas nozīmē, ka kaimiņi aiz loga netraucēs
        </p>
        <p>
          Aiz mājas ir gruntīgs, iekopts dārzs! Pietiks vieta gan dārza ballēm, piemājas salātu dārzam, biznesa idejām vai laiskai
          atpūtai. Sliktākā gadijumā, var treileru parku izveidot.
        </p>
        <p>
          Līdz jūrai 8 minūtes kājām, stacija 2 minūtes, veikals tikpat. Armēņu virtuve Nojan Tapan ir 3 minūtes no mājām.
          Ļoti iecienīta vieta ar vidējo vērtējumu 4,8 zvaigznes no piecām! Iesaku!
        </p>
      </div>
    </section>
  )
}
