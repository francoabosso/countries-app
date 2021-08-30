import Skeleton from "react-loading-skeleton";
import { useGlobal } from "../../context/globalContext";
import Border from "../Border/Border";
import styles from "./styles.module.scss";

const Borders = (props) => {
  const { borders } = useGlobal();
  return (
    <div className={styles.container}>
      <strong>
        {/* Borders being null means that it's still parsing data... */}
        {borders === null ? <Skeleton width={100} /> : "Border Countries: "}
      </strong>
      <div className={styles.wrapper}>
        {borders === null
          ? /* Borders being null means that it's still parsing data... */
            ""
          : borders.length !== 0
          ? borders.map((border) => (
              <Border border={border} key={border.code} />
            ))
          : /* Borders having 0 length (empty array) means that the country doesn't have any borders */
            "this country has no borders."}
      </div>
    </div>
  );
};

export default Borders;
