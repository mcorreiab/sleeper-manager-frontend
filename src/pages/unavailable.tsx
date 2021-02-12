import { GetServerSideProps } from "next";
import React, { FunctionComponent } from "react";
import UnavailablePlayersPage from "../containers/UnavailablePlayersPage";
import { Props, getProps } from "../initializer/unavailable";

const unavailable: FunctionComponent<Props> = ({ avatarUrl, rosters }) => (
  <UnavailablePlayersPage userAvatarUrl={avatarUrl} rosters={rosters} />
);

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const user = query.user as string;
  const props = await getProps(user);

  return { props };
};

export default unavailable;
