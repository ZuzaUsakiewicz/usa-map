import StateItem from "./StateItem";
import styles from "../styles/StateList.module.scss";

export const StatesList = ({ states }) => {
  return (
    <div className={styles.statesList}>
      {states.map((state) => (
        <StateItem state={state} key={state.id} />
      ))}
    </div>
  );
};
