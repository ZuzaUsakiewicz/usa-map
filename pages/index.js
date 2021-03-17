import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>My playground || Home</title>
        <meta name="keywords" content="programming" />
      </Head>
      <div className={styles.container}>
        <h1>USA Map</h1>
      </div>
    </>
  );
}
