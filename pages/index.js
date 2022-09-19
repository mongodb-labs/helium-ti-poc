import Table from '../components/table';

import { getUsers } from '../lib/users';

import styles from '../styles/Home.module.css';

export default function Home({ data }) {
  return (
    <main className={styles.container}>
      <h1>OFAC UI Prototype</h1>
      <Table defaultData={data} />
    </main>
  );
}

export const getStaticProps = async () => {
  const data = await getUsers();
  return {
    props: { data }
  };
};