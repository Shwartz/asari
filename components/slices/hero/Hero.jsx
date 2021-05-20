import styles from './Hero.module.scss'

export const Hero = () => {
  return (
    <section className={styles.slice}>
      <div className={styles.wrap}>
        <div className={styles.flex}>
          <div className={styles.text}>
            <h1 className={styles.title}>Iegādājies māju ar četriem dzīvokļiem Jūrmalā</h1>
            <p className={styles.price}>&euro;150 000</p>
          </div>
          <div className={styles.sixteenNine}>
            <div className={styles.content}/>
          </div>
        </div>
      </div>
    </section>
  )
}
