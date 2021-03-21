import Link from "next/Link";
import styles from "../styles/StateItemDetail.module.scss";

const StateItemDetailPage = ({ state }) => {
  console.log(state);
  return (
    <>
      <div className={styles.link}>
        <Link href="/">
          <a>
            <p className={styles.arrowBack}>
              <span>&larr; </span> back
            </p>
          </a>
        </Link>
      </div>
      <div className={styles.stateContainer}>
        <h4>{state.postal} </h4>
        <h1>{state.name}</h1>
        <img
          src={state.stateRouteMarker}
          alt={state.name}
          className={styles.routeMarker}
        />
        <p>
          {state.population.toString().slice(-4) +
            "," +
            state.population.toString().slice(-3)}
        </p>
      </div>
    </>
  );
};

export default StateItemDetailPage;
