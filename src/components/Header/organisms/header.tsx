import { Title } from "../atoms";
import Navigation from "../molecules";

const Header: React.FC = () => (
  <div className="flex items-center text-xl justify-between">
    <Title />
    <nav className="basis-20">
      <Navigation />
    </nav>
  </div>
);

export default Header;
