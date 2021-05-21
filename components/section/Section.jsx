import styles from './Section.module.scss';

export const Section = ({children, bgColor = '#fafafa'}) => {

  return (
    <section className={styles.slice} style={{backgroundColor: bgColor}}>
      <div className={styles.wrap}>{children}</div>
    </section>
  )
}
