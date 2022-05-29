import SummaryInfoItem from "./summaryInfoItem";
import classNames from "classnames";

export interface Props {
  leaguesTotal: number;
  playersTotal: number;
  backgroundColor: string;
  ruleColor: string;
}

const SummaryInfo: React.FunctionComponent<Props> = ({
  leaguesTotal,
  playersTotal,
  backgroundColor,
  ruleColor,
}) => (
  <ul
    className={classNames(
      "flex",
      "rounded-[16px]",
      "py-6",
      "px-8",
      "justify-between",
      "items-center",
      backgroundColor
    )}
  >
    <SummaryInfoItem
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
        ruleColor,
        "my-0",
        "mx-9"
      )}
    />
    <SummaryInfoItem
      summaryLabel="Player's overview"
      type="helmet"
      quantity={playersTotal}
      text="Players to be changed"
    />
  </ul>
);

export default SummaryInfo;
