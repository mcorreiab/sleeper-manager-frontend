import { GetServerSideProps } from "next";
import React, { FunctionComponent } from "react";
import UnavailablePlayersPage from "../containers/UnavailablePlayersPage";
import getUserInformation from "../services/user";

interface Props {
  avatarUrl: string;
}

const unavailable: FunctionComponent<Props> = ({ avatarUrl }) => (
  <UnavailablePlayersPage avatarUrl={avatarUrl} />
);

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const user = query.user as string;
  const userInformation = await getUserInformation(user);
  const avatarUrl = `https://sleepercdn.com/avatars/${userInformation.avatar}`;

  return { props: { avatarUrl } };
};

export default unavailable;
