import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useRouter } from "next/router";
import HomePageComponent from "./homePage";
import useUser from "@/hooks/useUser";

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
    <HomePageComponent
      isUsernameInvalid={usernameMissing}
      isUsernameMissing={isUsernameMissing}
      onChangeUsername={onChangeUsername}
      onFormSubmit={onFormSubmit}
      username={username}
    />
  );
};

export default HomePage;
