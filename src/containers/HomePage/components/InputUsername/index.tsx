import React, { FormEvent, ChangeEvent, FunctionComponent } from "react";
import styles from "./index.module.css";

interface Props {
  className: string;
  onFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
  username: string;
  onChangeUsername: (event: ChangeEvent<HTMLInputElement>) => void;
  isUsernameMissing: boolean;
}

const inputUsername: FunctionComponent<Props> = ({
  className,
  onFormSubmit,
  username,
  onChangeUsername,
  isUsernameMissing,
}) => {
  const inputUsernameClasses = [styles.inputUsername];
  let usernameMissing: string = null;
  if (isUsernameMissing) {
    inputUsernameClasses.push(styles.inputUsernameError);
    usernameMissing = "Should inform an username";
  }

  return (
    <div className={className}>
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
  );
};
export default inputUsername;
