import SummaryItem from "./summaryItem";
import styles from "./index.module.css";
import classNames from "classnames";

export interface Props {
  leaguesTotal: number;
  playersTotal: number;
}

const Summary: React.FunctionComponent<Props> = ({
  leaguesTotal,
  playersTotal,
}) => (
  <ul
    className={classNames(
      "flex",
      "bg-sm-blue rounded-[16px]",
      "py-6",
      "px-8",
      "justify-between",
      "items-center"
    )}
  >
    <SummaryItem
      summaryLabel="League's overview"
      type="badge"
      quantity={leaguesTotal}
      text="Leagues to be reviewed"
    />
    <hr
      className={classNames(
        "h-[71px]",
        "border-[1px]",
        "border-l-0",
        "border-[#5e49dc]",
        "my-0",
        "mx-9"
      )}
    />
    <SummaryItem
      summaryLabel="Player's overview"
      type="helmet"
      quantity={playersTotal}
      text="Players to be changed"
    />
  </ul>
);

export default Summary;
