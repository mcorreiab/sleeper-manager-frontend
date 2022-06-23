import WithHeader from "@/hoc/withHeader";
import classNames from "classnames";
import { ChangeEvent, FormEvent } from "react";
import { InputUsername, TitleArea, BallAndHelmet } from "./components";

interface Props {
  onFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
  username: string;
  onChangeUsername: (event: ChangeEvent<HTMLInputElement>) => void;
  isUsernameMissing: boolean | undefined;
  isUsernameInvalid: boolean | undefined;
}

const HomePage: React.FunctionComponent<Props> = ({
  isUsernameInvalid,
  isUsernameMissing,
  onChangeUsername,
  onFormSubmit,
  username,
}) => (
  <WithHeader>
    <main
      className={classNames(
        "flex grow",
        "flex-col",
        "justify-between",
        "text-sm-lightwhite",
        "items-stretch",
        "my-4",
        "mx-0",
        "lg:grid",
        "lg:grid-cols-2-45",
        "lg:grid-rows-4-10-auto-15",
        "lg:gap-x-28"
      )}
    >
      <TitleArea className="lg:row-start-2" />
      <figure
        className={classNames(
          "grow",
          "lg:col-start-2",
          "lg:row-start-2",
          "lg:row-span-2",
          "lg:place-self-stretch",
          "flex",
          "flex-col",
          "justify-center"
        )}
      >
        <BallAndHelmet className="w-full h-full" />
      </figure>
      <InputUsername
        className="font-['Open Sans', sans-serif] lg:row-start-3"
        onFormSubmit={onFormSubmit}
        username={username}
        onChangeUsername={onChangeUsername}
        isUsernameMissing={isUsernameMissing}
        isUsernameInvalid={isUsernameInvalid}
      />
    </main>
  </WithHeader>
);

export default HomePage;
