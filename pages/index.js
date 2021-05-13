import Head from 'next/head'
import Image from 'next/image'

// import styles from '../styles/Home.module.scss'
import styles from '../styles/index.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Māja Jūrmalā, Induļa 6</title>
        <meta name="description" content="Pārdod māju Asaros, Jūrmalā" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <p>Hero Block, nice view of sea/Jurmala + phone, + email, + price</p>
      </section>

      <section>
        <p>Intro text</p>
      </section>

      <section>
        <p>2 - 4 images block, consist of plans</p>
      </section>

      <section>
        <p>Main Description</p>
      </section>

      <section>
        <p>All Images</p>
      </section>

      <section>
        <p>Bonus text</p>
      </section>

      <footer className={styles.footer}>
        <p>Footer</p>
      </footer>
    </div>
  )
}
