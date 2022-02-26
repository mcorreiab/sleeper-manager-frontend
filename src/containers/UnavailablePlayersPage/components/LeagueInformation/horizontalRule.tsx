export interface Props {
  className?: string;
}

const HorizontalRule: React.FunctionComponent<Props> = ({ className }) => {
  const defaultClassName = "border border-t-0 border-[#ffffff26] border-solid";
  return (
    <hr
      className={
        className ? `${defaultClassName} ${className}` : defaultClassName
      }
    />
  );
};

export default HorizontalRule;
