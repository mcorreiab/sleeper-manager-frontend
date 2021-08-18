import { ReactNode } from "react";
import Header from "@/components/Header";
import styles from "./index.module.css";

interface Props {
  children?: ReactNode;
}

const withHeader: React.FunctionComponent<Props> = ({ children }) => (
  <div className={styles.container}>
    <header>
      <Header />
    </header>
    {children}
  </div>
);

export default withHeader;
