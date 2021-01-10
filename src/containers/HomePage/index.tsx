import React, {
  useState,
  ChangeEvent,
  FormEvent,
  FunctionComponent,
} from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import WithHeader from "../../hoc/withHeader";
import TitleArea from "./components/TitleArea";
import InputUsername from "./components/InputUsername";

const HomePage: FunctionComponent = () => {
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
        <img
          className={styles.illustration}
          src="/ball-and-helmet.svg"
          alt="Helmet and ball"
        />
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
