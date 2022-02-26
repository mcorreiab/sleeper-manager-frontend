import { useState } from "react";
import styles from "./index.module.css";
import RoundDivider from "../RoundDivider";
import ListStatusPlayer from "./listStatusPlayer";
import Hide from "./hide";
import Expand from "./expand";
import classNames from "classnames";

export interface PlayerProps {
  id: string;
  name: string;
  injuryStatus: string;
  position: string;
  team: string;
}

export interface RosterProps {
  name: string;
  size: number;
  players: PlayerProps[];
}

export interface Props {
  roster: RosterProps;
  key?: string;
}

const LeagueInformation: React.FunctionComponent<Props> = ({ roster }) => {
  const [detailHidden, setDetailHidden] = useState(false);

  const onClick = () => {
    setDetailHidden(!detailHidden);
  };

  const arrow = detailHidden ? (
    <Hide className="col-start-2 self-center justify-self-end" />
  ) : (
    <Expand className="col-start-2 self-center justify-self-end" />
  );

  const outPlayers = roster.players.filter(
    (player) => player.injuryStatus === "Out"
  );

  const doubtfulPlayers = roster.players.filter(
    (player) => player.injuryStatus === "Doubtful"
  );

  const questionablePlayers = roster.players.filter(
    (player) => player.injuryStatus === "Questionable"
  );

  const questionableComponent =
    questionablePlayers.length > 0 ? (
      <ListStatusPlayer
        statusLabel="Questionable"
        players={questionablePlayers}
        lastStatus
      />
    ) : null;

  const doubtfulComponent =
    doubtfulPlayers.length > 0 ? (
      <ListStatusPlayer
        statusLabel="Doubtful"
        players={doubtfulPlayers}
        lastStatus={questionablePlayers.length === 0}
      />
    ) : null;

  const outComponent =
    outPlayers.length > 0 ? (
      <ListStatusPlayer
        statusLabel="Out"
        players={outPlayers}
        lastStatus={
          questionablePlayers.length === 0 && doubtfulPlayers.length === 0
        }
      />
    ) : null;

  return (
    <details
      onToggle={() => onClick()}
      className="px-5 pt-4 pb-0 bg-[#292e3c] rounded-[8px] mb-4 open:pb-5"
    >
      <summary className="grid gap-x-2 gap-y-2">
        <h2 className="text-base font-bold" key={roster.name}>
          {roster.name}
        </h2>
        {arrow}
        <p
          aria-label={`${roster.name} players situation`}
          className={classNames(
            "text-sm",
            "text-sm-lightgray",
            "row-start-2",
            "col-span-2",
            "flex",
            "mb-4",
            "items-center"
          )}
        >
          {outPlayers.length} Out
          <RoundDivider /> {doubtfulPlayers.length} Doubtful <RoundDivider />
          {questionablePlayers.length} Questionable
        </p>
      </summary>
      {outComponent}
      {doubtfulComponent}
      {questionableComponent}
    </details>
  );
};

export default LeagueInformation;
