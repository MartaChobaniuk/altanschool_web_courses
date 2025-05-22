import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  return (
    <div className={styles.error}>
      <p className={styles.error__text}>Not Found Page</p>
    </div>
  )
}