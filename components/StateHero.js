import styles from "../styles/StateItemDetail.module.scss";

const StateHero = ({ state }) => {
  return (
    <div className={styles.stateHeroContainer}>
      <h1>{state.name}</h1>
      <h4>{state.postal} </h4>
      <img
        src={state.stateBorder}
        alt={state.name}
        className={styles.imageBorder}
      />
    </div>
  );
};

export default StateHero;
