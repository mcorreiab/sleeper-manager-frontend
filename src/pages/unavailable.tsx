import { GetServerSideProps } from "next";
import React, { FunctionComponent } from "react";
import UnavailablePlayersPage, {
  Props,
} from "@/containers/UnavailablePlayersPage";
import getProps from "@/initializer/unavailable";

const unavailable: FunctionComponent<Props> = ({ userAvatarUrl, rosters }) => (
  <UnavailablePlayersPage userAvatarUrl={userAvatarUrl} rosters={rosters} />
);

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const user = query.user as string;
  const props = await getProps(user);

  return { props };
};

export default unavailable;
