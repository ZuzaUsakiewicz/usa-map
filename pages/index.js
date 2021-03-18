import Head from "next/head";
import USAMap from "react-usa-map";
import styles from "../styles/Home.module.scss";
import { server } from "../config";

import { useRouter } from "next/router";
import { StatesList } from "../components/StatesList";

export default function Home({ states }) {
  const router = useRouter();
  const mapHandler = (event) => {
    router.push("/state/" + event.target.dataset.name);
  };
  return (
    <>
      <Head>
        <title>USA</title>
        <meta name="keywords" content="programming" />
      </Head>
      <div className={styles.container}>
        <h1>USA Map</h1>
        <USAMap
          width={1000}
          height={1000}
          onClick={mapHandler}
          defaultFill={"#000"}
        />
        <StatesList states={states} />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const respond = await fetch(`${server}/api/states`);
  const states = await respond.json();

  return {
    props: { states },
  };
};
