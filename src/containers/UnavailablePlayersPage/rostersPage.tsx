import { useEffect, useState } from "react";
import RosterPageMobile from "./rostersPage.mobile";
import RosterPageDesktop from "./rostersPage.desktop";
import { Props } from "./rosterProps";

const RostersPage: React.FunctionComponent<Props> = (props) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleWindowSizeChange = () => setWindowSize(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, []);

  const isDesktop = windowSize >= 1024;

  return isDesktop ? (
    <RosterPageDesktop {...props} />
  ) : (
    <RosterPageMobile {...props} />
  );
};

export default RostersPage;
