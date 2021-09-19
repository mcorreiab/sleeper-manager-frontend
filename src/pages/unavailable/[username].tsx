import { GetServerSideProps } from "next";
import UnavailablePlayersPage from "@/containers/UnavailablePlayersPage";

const unavailable: React.FunctionComponent<{ username: string }> = ({
  username,
}) => <UnavailablePlayersPage username={username} />;

export default unavailable;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const username = query.username as string;

  return {
    props: {
      username,
    },
  };
};
