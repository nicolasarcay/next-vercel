import Head from 'next/head';
import { Navbar } from '../Navbar/Navbar';
import styles from './MainLayout.module.css';
import { propsWithChildren } from './LightLayout';

export const MainLayout = ({ children }: propsWithChildren) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Nicolas</title>
        <meta name="description" content="Pagina Principal de mi primera app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
