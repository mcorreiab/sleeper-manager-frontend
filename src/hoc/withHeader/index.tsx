import { ReactNode } from "react";
import Header from "@/components/Header";
import styles from "./index.module.css";

interface Props {
  children?: ReactNode;
}

const withHeader: React.FC<Props> = ({ children }) => (
  <div className="flex flex-col h-screen bg-background-color p-default-spacing">
    <header>
      <Header />
    </header>
    {children}
  </div>
);

export default withHeader;
