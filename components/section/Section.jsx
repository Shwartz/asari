import styles from './Section.module.scss';

export const Section = ({children, bgColor}) => {

  return (
    <section style={{backgroundColor: bgColor}} className={styles.slice}>
      <div className={styles.wrap}>{children}</div>
    </section>
  )
}