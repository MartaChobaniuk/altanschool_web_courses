import React from 'react';
import styles from './ShopBlock.module.scss';

interface Props {
  title: string;
  images: string[];
  image: string;
}

export const ShopBlock: React.FC<Props> = ({ title, images, image }) => {
  return (
    <div className={styles.shop}>
      <h2 className={styles.shop__title}>{title}</h2>
      <div className={styles.shop__grid}>
        {images.map((src, index) => (
          <div key={index} className={styles['shop__img-container']}>
            <img src={src} alt={`Category ${index + 1}`}  className={styles.shop__img} />
          </div>
        ))}
      </div>
      <div className={styles['shop__big-img-container']}>
        <img src={image} alt={image} className={styles['shop__big-img']} />
      </div>
    </div>
  );
}