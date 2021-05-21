import styles from './NineSixteen.module.scss';

export const NineSixteen = ({children}) => {

  return (
    <div className={styles.sixteenNine}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

/**
 *
 * 16:9
 * 304 x 171
 * 608 x 342
 * 1216 x 684
 */
