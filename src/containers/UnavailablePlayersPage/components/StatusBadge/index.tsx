import classNames from "classnames";

interface Props {
  tag: "h2" | "h3";
  statusLabel: string;
  className?: string;
}

const StatusBadge: React.FunctionComponent<Props> = ({
  tag,
  statusLabel,
  className,
}) => {
  const RootTag: keyof JSX.IntrinsicElements = `${tag}`;
  return (
    <RootTag
      className={classNames(
        "font-bold",
        "text-[#dbdfff]",
        "rounded-[32px]",
        "bg-sm-blue",
        "self-start",
        className
      )}
    >
      {statusLabel}
    </RootTag>
  );
};

export default StatusBadge;
