import styles from "../styles/StateItemDetail.module.scss";
const StateInfo = ({ state }) => {
  return (
    <div className={styles.stateContainer}>
      <img
        src={state.stateRouteMarker}
        alt={state.name}
        className={styles.routeMarker}
      />
      <p>
        {state.population.toString().slice(-4) +
          "," +
          state.population.toString().slice(-3)}
      </p>{" "}
    </div>
  );
};

export default StateInfo;
