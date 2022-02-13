import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useRouter } from "next/router";
import WithHeader from "@/hoc/withHeader";
import styles from "./index.module.css";
import { InputUsername, TitleArea } from "./components";
import useUser from "@/hooks/useUser";
import BallAndHelmet from "./ballAndHelmet";

const HomePage: React.FunctionComponent = () => {
  const [username, setUsername] = useState("");
  const [isUsernameMissing, setIsUsernameMissing] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(false);
  const { data, usernameMissing } = useUser(username, shouldFetch);
  const router = useRouter();

  const onChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setUsername(event.target.value);
    setIsUsernameMissing(false);
    setShouldFetch(false);
  };

  const onFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username.length === 0) {
      setIsUsernameMissing(true);
    } else {
      setShouldFetch(true);
    }
  };

  useEffect(() => {
    if (data) {
      router.push(`/unavailable/${data.username}`);
    }
  }, [data]);

  return (
    <WithHeader>
      <main className="flex grow flex-col justify-between text-[#eaeaea] items-stretch my-4 mx-0 lg:grid lg:grid-cols-2-45 lg:grid-rows-4-10-auto-15 lg:gap-x-28">
        <TitleArea className="lg:row-start-2" />
        <figure className="grow lg:col-start-2 lg:row-start-2 lg:row-span-2 lg:place-self-stretch">
          <BallAndHelmet className="w-full h-full" />
        </figure>
        <InputUsername
          className="font-['Open Sans', sans-serif] lg:row-start-3"
          onFormSubmit={onFormSubmit}
          username={username}
          onChangeUsername={onChangeUsername}
          isUsernameMissing={isUsernameMissing}
          isUsernameInvalid={usernameMissing}
        />
      </main>
    </WithHeader>
  );
};

export default HomePage;
