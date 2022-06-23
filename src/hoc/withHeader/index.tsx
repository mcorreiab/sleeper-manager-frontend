import { ReactNode } from "react";
import Header from "@/components/Header";

interface Props {
  children?: ReactNode;
}

const withHeader: React.FC<Props> = ({ children }) => (
  <div className="bg-background-color">
    <div className="flex flex-col max-w-screen-xl p-default-spacing min-h-screen my-0 mx-auto">
      <header>
        <Header />
      </header>
      {children}
    </div>
  </div>
);

export default withHeader;
