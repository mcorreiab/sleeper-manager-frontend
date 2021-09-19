import { Player } from "@lottiefiles/react-lottie-player";
import styles from "./index.module.css";

const loading: React.FunctionComponent = () => (
  <div className={styles.container}>
    <Player
      autoplay
      loop
      src="https://assets9.lottiefiles.com/packages/lf20_NXDoNy.json"
    />
    <h1 style={{ color: "white" }}>Loading...</h1>
  </div>
);

export default loading;
