export const Path = {
  Home: '/',
  About: '/about',
  Shop: '/shop',
  Blog: '/blog',
  Contact: '/contact',
  Menu: '/menu',
} as const;

export type Path = typeof Path[keyof typeof Path];