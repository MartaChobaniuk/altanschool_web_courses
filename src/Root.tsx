import { Route, Routes } from 'react-router-dom';
import { Path } from './types/Path';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { ShopPage } from './pages/ShopPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const Root = () => (
  <Routes>
    <Route path={Path.Home} element={<App />}>
      <Route index element={<HomePage />} />
      <Route path={Path.Menu} element={<MenuPage />} />
      <Route path={Path.About} element={<AboutPage />} />
      <Route path={Path.Shop} element={<ShopPage />} />
      <Route path={Path.Blog} element={<BlogPage />} />
      <Route path={Path.Contact} element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);