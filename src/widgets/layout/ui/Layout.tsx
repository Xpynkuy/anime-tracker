import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss'
import { Header } from '../../header';
import { Footer } from '../../footer';

export const Layout = () => {
  return <div className={styles.wrapper}>
    <Header/>
    <main>
      <Suspense>
        <Outlet/>
      </Suspense>
    </main>
    <Footer/>
  </div>;
};
