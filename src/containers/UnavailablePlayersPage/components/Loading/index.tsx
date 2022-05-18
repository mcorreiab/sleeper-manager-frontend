import { Player } from "@lottiefiles/react-lottie-player";
import classNames from "classnames";

interface Props {
  className?: string;
}

const loading: React.FunctionComponent<Props> = ({ className }) => (
  <div
    className={classNames(
      "bg-background-color",
      "flex",
      "flex-col",
      "items-center",
      "justify-center",
      "h-full",
      "text-[2rem]",
      "font-light",
      className
    )}
  >
    <Player
      autoplay
      loop
      src="https://assets9.lottiefiles.com/packages/lf20_NXDoNy.json"
    />
    <h1 className="text-sm-lightwhite">Loading...</h1>
  </div>
);

export default loading;
