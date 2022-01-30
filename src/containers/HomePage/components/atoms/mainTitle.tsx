import classnames from "classnames";

interface Props {
  className?: string;
}

const MainTitle: React.FC<Props> = ({ className }) => {
  const mainTitleClass = classnames(
    className,
    "font-normal",
    "text-[2.4375rem]",
    "md:text-[2.85rem]"
  );

  return (
    <h2 className={mainTitleClass}>
      Tool to easy your life at <span className="text-[#f26506]">sleeper</span>{" "}
      fantasy platform
    </h2>
  );
};

export default MainTitle;
