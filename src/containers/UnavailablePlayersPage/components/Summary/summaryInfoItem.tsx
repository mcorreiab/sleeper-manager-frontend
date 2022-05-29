import LeagueBadge from "./leagueBadge";
import classNames from "classnames";
import Helmet from "./helmet";

export interface summaryItemProps {
  summaryLabel: string;
  quantity: number;
  text: string;
  type: "badge" | "helmet";
}

const SummaryInfoItem: React.FunctionComponent<summaryItemProps> = ({
  summaryLabel,
  quantity,
  text,
  type,
}) => {
  let icon: React.ReactNode;
  if (type === "badge") {
    icon = <LeagueBadge className="justify-self-end" />;
  } else {
    icon = <Helmet className="justify-self-end" />;
  }

  return (
    <li
      aria-label={summaryLabel}
      className={classNames(
        "text-[#ffffff]",
        "grid",
        "grid-cols-2",
        "gap-y-1",
        "gap-x-2",
        "items-center"
      )}
    >
      {icon}
      <strong className="col-start-2 font-black not-italic text-2xl">
        {quantity}{" "}
      </strong>
      <p
        className={classNames(
          "row-start-2",
          "col-span-2",
          "text-center",
          "text-sm",
          "leading-[1.125rem]",
          "tracking-[0.009375rem]"
        )}
      >
        {text}
      </p>
    </li>
  );
};

export default SummaryInfoItem;
