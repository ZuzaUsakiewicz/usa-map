import Link from "next/Link";
import styles from "../styles/StateList.module.scss";

const StateItem = ({ state }) => {
  return (
    <Link href={`/state/${state.postal}`}>
      <div className={styles.card}>
        <img className={styles.flagimage} src={state.flag} alt={state.name} />
        <a>
          <h5 className={state.postal} data-postal={state.postal}>
            {state.name}
          </h5>
        </a>
      </div>
    </Link>
  );
};

export default StateItem;
