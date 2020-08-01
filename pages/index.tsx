import Link from 'next/link';
import Layout from '../components/Layout';
import styles from './style/index.module.scss';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 className={styles.test}>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
