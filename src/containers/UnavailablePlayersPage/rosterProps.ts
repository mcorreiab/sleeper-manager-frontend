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
  avatarUrl: string;
  players: PlayerProps[];
}

export interface Props {
  user: string;
  userAvatarUrl: string;
  rosters: RosterProps[];
}
