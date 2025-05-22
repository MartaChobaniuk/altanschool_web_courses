import { Outlet, useLocation } from 'react-router-dom'
import './App.scss'
import { Header } from './components/Header'
import cn from 'classnames';
import { Path } from './types/Path';

export const App = () => {
  const { pathname } = useLocation();

  return (
    <div
      className={cn('app', {
        'app--about': pathname === Path.About,
        'app--shop': pathname === Path.Shop,
        'app--contact': pathname === Path.Contact,
        'app--menu': pathname === Path.Menu,
      })}
    >
      <header
        className={cn('app__header', {
          'app__header--about': pathname === Path.About,
          'app__header--shop': pathname === Path.Shop,
          'app__header--contact': pathname === Path.Contact,
          'app__header--menu': pathname === Path.Menu,

        })}
      >
        <Header />
      </header>
      <div
        className={cn('app__container', {
          ['app__container--shop']: pathname === Path.Shop,
        })}
      >
        <div className={cn('app__line', {
          ['app__line--home']: pathname === Path.Home,
          ['app__line--about']: pathname === Path.About,
          ['app__line--shop']: pathname === Path.Shop,
          ['app__line--blog']: pathname === Path.Blog,
          ['app__line--contact']: pathname === Path.Contact,
          ['app__line--menu']: pathname === Path.Menu,
        })}></div>
        <main className='app__main'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}