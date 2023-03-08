import Link from 'next/link';
import { LightLayout } from '../../components/layouts/LightLayout';
import { MainLayout } from '../../components/layouts/MainLayout';

export default function AboutPage() {
  return (
    <>
      <h1 className="title">About Page</h1>
      <h2 className="title">
        Ir a <Link href="/">Home</Link>
      </h2>

      <p className="description">
        Get started by editing{' '}
        <code className="code">pages/about/index.jsx</code>
      </p>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <LightLayout>{page}</LightLayout>
    </MainLayout>
  );
};
