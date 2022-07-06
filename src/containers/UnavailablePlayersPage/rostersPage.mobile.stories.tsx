import { ComponentMeta, ComponentStory } from "@storybook/react";
import RostersPageMobile from "./rostersPage.mobile";
import { RosterProps } from "./rosterProps";

const rosterAllStatus: RosterProps = {
  name: "Roster 1",
  size: 12,
  avatarUrl: "/sleeper-logo.png",
  players: [
    {
      id: "1",
      name: "Player 1",
      injuryStatus: "Questionable",
      position: "QB",
      team: "Green Bay Packers",
    },
    {
      id: "2",
      name: "Player 2",
      injuryStatus: "Out",
      position: "WR",
      team: "Green Bay Packers",
    },
    {
      id: "3",
      name: "Player 3",
      injuryStatus: "Doubtful",
      position: "RB",
      team: "Buffalo Bills",
    },
  ],
};

const rosterSingleStatus: RosterProps = {
  name: "Roster 2",
  size: 10,
  avatarUrl: "/sleeper-logo.png",
  players: [
    {
      id: "3",
      name: "Player 3",
      injuryStatus: "Doubtful",
      position: "RB",
      team: "Buffalo Bills",
    },
  ],
};

export default {
  title: "Unavailable Players/mobile",
  component: RostersPageMobile,
} as ComponentMeta<typeof RostersPageMobile>;

const Template: ComponentStory<typeof RostersPageMobile> = (args) => (
  <RostersPageMobile {...args} />
);

export const Filled = Template.bind({});
Filled.args = {
  user: "user",
  userAvatarUrl: "/sleeper-logo.png",
  rosters: [rosterAllStatus, rosterSingleStatus],
};

export const EmptyState = Template.bind({});
EmptyState.args = {
  ...Filled.args,
  rosters: [],
};
