import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import WithHeader from "../../hoc/withHeader";

const HomePage = () => {
  const [inputUsernameClasses, setInputUsernameClasses] = useState([
    styles.inputUsername,
  ]);
  const [username, setUsername] = useState("");
  const [usernameMissing, setUsernameMissing] = useState(null);
  const router = useRouter();

  const onChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setUsername(event.target.value);
    setUsernameMissing(null);
  };

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username.length === 0) {
      setUsernameMissing("Should inform an username");
    } else {
      router.push({
        pathname: "/unavailable",
        query: { user: username },
      });
    }
  };

  useEffect(() => {
    if (usernameMissing) {
      setInputUsernameClasses(
        inputUsernameClasses.concat(styles.inputUsernameError)
      );
    } else {
      setInputUsernameClasses([styles.inputUsername]);
    }
  }, [usernameMissing]);

  return (
    <WithHeader>
      <div className={styles.titleArea}>
        <h2 className={styles.title} data-testid="page-title">
          Tool to easy your life at <span>sleeper</span> fantasy platform
        </h2>
        <p className={styles.description}>
          Insert your username to check all players with non ok injury status
        </p>
      </div>
      <img
        className={styles.illustration}
        src="/ball-and-helmet.svg"
        alt="Helmet and ball"
      />
      <div className={styles.inputArea}>
        <form onSubmit={onFormSubmit}>
          <input
            className={inputUsernameClasses.join(" ")}
            placeholder="Insert your username here"
            value={username}
            onChange={onChangeUsername}
          />
          <p className={styles.errorMessage}>{usernameMissing}</p>
          <input className={styles.button} type="submit" value="GO" />
        </form>
      </div>
    </WithHeader>
  );
};

export default HomePage;
