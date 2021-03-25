import Link from "next/Link";
import styles from "../styles/StateList.module.scss";

const StateItem = ({ state }) => {
  return (
    <Link href={`/state/${state.postal}`}>
      <a>
        <div className={styles.card}>
          <div className={styles.flagimage}>
            <img src={state.flag} alt={state.name} />
          </div>
          <h5 className={state.postal} data-postal={state.postal}></h5>
          <h6> {state.name}</h6>
        </div>
      </a>
    </Link>
  );
};

export default StateItem;
