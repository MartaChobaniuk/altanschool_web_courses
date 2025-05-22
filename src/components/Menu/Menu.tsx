import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import styles from './Menu.module.scss';
import { navLinks } from '../../helpers/navLinks';

export const Menu = () => {
  const getActiveLink = ({ isActive }: { isActive: boolean }) =>
    cn(styles.menu__item, { [styles['menu__item--active']]: isActive });

  return (
    <div className={styles.menu}>
      {navLinks.map(link => (
        <NavLink key={link.path} to={link.path} className={getActiveLink}>
          <span className={styles.menu__name}>
            {link.label}
          </span>
        </NavLink>
      ))}
    </div>
  )
}