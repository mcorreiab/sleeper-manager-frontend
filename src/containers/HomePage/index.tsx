import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import WithHeader from "@/hoc/withHeader";
import styles from "./index.module.css";
import { TitleArea, InputUsername } from "./components";

const HomePage: React.FunctionComponent = () => {
  const [username, setUsername] = useState("");
  const [isUsernameMissing, setIsUsernameMissing] = useState(false);
  const router = useRouter();

  const onChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setUsername(event.target.value);
    setIsUsernameMissing(false);
  };

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username.length === 0) {
      setIsUsernameMissing(true);
    } else {
      router.push({
        pathname: "/unavailable",
        query: { user: username },
      });
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
        />
      </main>
    </WithHeader>
  );
};

export default HomePage;
