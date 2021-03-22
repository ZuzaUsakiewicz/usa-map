import styles from "../styles/StateItemDetail.module.scss";
import Link from "next/Link";

const LinkBack = () => {
  return (
    <div className={styles.link}>
      <Link href="/">
        <a>
          <p className={styles.arrowBack}>
            <span>&larr; </span> back
          </p>
        </a>
      </Link>
    </div>
  );
};

export default LinkBack;
