import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useRouter } from "next/router";
import WithHeader from "@/hoc/withHeader";
import styles from "./index.module.css";
import { TitleArea, InputUsername } from "./components";
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
      <main className={styles.content}>
        <TitleArea className={styles.titleArea} />
        <figure className={styles.illustration}>
         <BallAndHelmet className={styles.illustrationImage} />
        </figure>
        <InputUsername
          className={styles.inputArea}
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
