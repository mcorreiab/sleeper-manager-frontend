import classNames from "classnames";
import Image from "next/image";
import { RosterProps } from "../../rosterProps";
import { getPlayersByStatus } from "../../rosterQuantities";
import PlayersOverview from "../PlayersOverview";
import RosterCard from "./rosterCard";

interface Props {
  rosters: RosterProps[];
}

const RostersUser: React.FunctionComponent<Props> = ({ rosters }) => {
  const rosterList = rosters.map((roster) => (
    <RosterCard key={roster.name} roster={roster} />
  ));
  return <ul>{rosterList}</ul>;
};

export default RostersUser;
