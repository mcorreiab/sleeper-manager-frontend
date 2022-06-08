import { useState } from "react";
import ListStatusPlayer from "./listStatusPlayer";
import Hide from "./hide";
import Expand from "./expand";
import { getPlayersByStatus } from "../../rosterQuantities";
import { RosterProps } from "../../rosterProps";
import PlayersOverview from "../PlayersOverview";

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

  const { outPlayers, doubtfulPlayers, questionablePlayers } =
    getPlayersByStatus(roster);

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
        <PlayersOverview
          rosterName={roster.name}
          outPlayers={outPlayers.length}
          doubtfulPlayers={doubtfulPlayers.length}
          questionablePlayers={questionablePlayers.length}
          className="text-sm-lightgray mb-4"
        />
      </summary>
      {outComponent}
      {doubtfulComponent}
      {questionableComponent}
    </details>
  );
};

export default LeagueInformation;
