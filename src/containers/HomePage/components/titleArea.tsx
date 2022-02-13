interface Props {
  className?: string;
}

const TitleArea: React.FC<Props> = ({ className }) => (
  <div className={className}>
    <h2 className="text-[2.4375rem] font-normal mb-4">
      Tool to easy your life at <span className="text-[#f26506]">sleeper</span>{" "}
      fantasy platform
    </h2>
    <p className="text-xl font-['Open Sans, sans-serif'] md:text-[1.4rem]">
      Insert your username to check all players with non ok injury status
    </p>
  </div>
);

export default TitleArea;
