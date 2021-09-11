import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import WithHeader from "@/hoc/withHeader";
import styles from "./index.module.css";
import { TitleArea, InputUsername } from "./components";
import getUserInformation from "@/services/user";

const HomePage: React.FunctionComponent = () => {
  const [username, setUsername] = useState("");
  const [isUsernameMissing, setIsUsernameMissing] = useState(false);
  const [isInvalidUsername, setIsInvalidUsername] = useState(false);
  const router = useRouter();

  const onChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setUsername(event.target.value);
    setIsUsernameMissing(false);
    setIsInvalidUsername(false);
  };

  const onFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username.length === 0) {
      setIsUsernameMissing(true);
    } else {
      const userInformation = await getUserInformation(username);

      if (userInformation) {
        router.push({
          pathname: "/unavailable",
          query: { user: username.trim() },
        });
      } else {
        setIsInvalidUsername(true);
      }
    }
  };

  return (
    <WithHeader>
      <main className={styles.content}>
        <TitleArea className={styles.titleArea} />
        <figure className={styles.illustration}>
          <img src="/ball-and-helmet.svg" alt="Helmet and ball" />
        </figure>
        <InputUsername
          className={styles.inputArea}
          onFormSubmit={onFormSubmit}
          username={username}
          onChangeUsername={onChangeUsername}
          isUsernameMissing={isUsernameMissing}
          isUsernameInvalid={isInvalidUsername}
        />
      </main>
    </WithHeader>
  );
};

export default HomePage;
