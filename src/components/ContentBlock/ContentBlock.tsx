import React from 'react';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';
import styles from './ContentBlock.module.scss';
import { Path } from '../../types/Path';

interface Props {
  title: string;
  text: string;
  text2?: string;
  buttonText: string;
  image: string;
}

export const ContentBlock: React.FC<Props> = ({ title, text, text2, buttonText, image }) => {
  const { pathname } = useLocation();

  return (
    <div className={styles.content}>
      <h2 className={styles['content__title-mobile']}>{title}</h2>
      <div
        className={cn(styles.content__container, {
          [styles['content__container--about']]: pathname === Path.About,
        })}
      >
        <div className={cn(styles['content__img-container'], {
          [styles['content__img-container--about']]: pathname === Path.About,
        })}>
          <img src={image} alt={title} className={styles.content__img} />
        </div>

        <div className={cn(styles.content__block, {
          [styles['content__block--about']]: pathname === Path.About,
        })}>
          <h2 className={styles.content__title}>{title}</h2>
          <p className={styles.content__text}>{text}</p>
          <div className={cn(styles['content__img-container-mobile'], {
            [styles['content__img-container-mobile--about']]: pathname === Path.About,
          })}>
            <img src={image} alt={title} className={styles.content__img} />
          </div>
          <p className={styles.content__text}>{text2}</p>
          <button className={cn(styles.content__button, {
            [styles['content__button--about']]: pathname === Path.About,
          })}>
            <span className={cn(styles['content__button-text'], {
              [styles['content__button-text--about']]: pathname === Path.About,
            })}>
              {buttonText}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
