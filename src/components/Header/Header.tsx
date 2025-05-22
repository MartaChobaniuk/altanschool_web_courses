import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import styles from './Header.module.scss';
import { Path } from '../../types/Path';
import { navLinks } from '../../helpers/navLinks';
import menu_burger from '../../assets/menu_burger.svg';
import cross from '../../assets/cross.png';

export const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
    navigate(Path.Menu);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
    navigate(Path.Home);
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <NavLink to={Path.Home} className={styles.header__text}>
          Altanschool web courses
        </NavLink>
      </div>
      <nav className={styles.header__nav}>
        {navLinks.map(link => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }: { isActive: boolean }) =>
              cn(styles.header__item, {
                [styles['header__item--active']]: isActive,
              })}
          >
            <span className={styles.header__name}>{link.label}</span>
          </NavLink>
        ))}
      </nav>
      {openMenu && pathname === Path.Menu ? (
        <button
          className={styles.header__button}
          onClick={handleCloseMenu}
        >
          <img src={cross} alt='cross' className={styles['header__img-cross']} />
        </button>
      ) : (
        <button
          className={styles.header__button}
          onClick={handleOpenMenu}
        >
          <img src={menu_burger} alt='menu' className={styles.header__img} />
        </button>
      )}
    </div>
  );
}