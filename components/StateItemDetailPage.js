import StateHero from "../components/StateHero";
import LinkBack from "../components/LinkBack";
import StateInfo from "../components/StateInfo";
import styles from "../styles/StateItemDetail.module.scss";

const StateItemDetailPage = ({ state }) => {
  return (
    <div className={styles.stateContainer}>
      <LinkBack />
      <StateHero state={state} />
      <StateInfo state={state} />
    </div>
  );
};

export default StateItemDetailPage;
