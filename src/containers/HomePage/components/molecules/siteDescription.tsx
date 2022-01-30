import { Description, MainTitle } from "../atoms";

interface Props {
  className?: string;
}

const SiteDescription: React.FC<Props> = ({ className }) => (
  <div className={className}>
    <MainTitle className="mb-4" />
    <Description />
  </div>
);

export default SiteDescription;
