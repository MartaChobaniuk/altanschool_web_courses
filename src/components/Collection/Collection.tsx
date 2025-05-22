import type React from 'react';
import styles from './Collection.module.scss';

interface Props {
  title: string;
  images: string[];
  description: string;
}

export const Collection: React.FC<Props> = ({ title, images, description }) => {
  return (
    <section className={styles.collection}>
      <h2 className={styles.collection__title}>{title}</h2>

      <div className={styles.collection__grid}>
        {images.map((src, idx) => (
          <div className={styles['collection__img-container']} key={idx}>
            <img src={src} alt={`collection item ${idx + 1}`} className={styles.collection__img} />
          </div>
        ))}
      </div>

      <p className={styles.collection__text}>{description}</p>
    </section>
  );
}