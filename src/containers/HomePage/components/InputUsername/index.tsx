import { FormEvent, ChangeEvent } from "react";
import classnames from "classnames";
import styles from "./index.module.css";

interface Props {
  className: string;
  onFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
  username: string;
  onChangeUsername: (event: ChangeEvent<HTMLInputElement>) => void;
  isUsernameMissing: boolean;
  isUsernameInvalid: boolean;
}

const inputUsername: React.FunctionComponent<Props> = ({
  className,
  onFormSubmit,
  username,
  onChangeUsername,
  isUsernameMissing,
  isUsernameInvalid,
}) => (
  <div className={className}>
    <form onSubmit={onFormSubmit}>
      <input
        className={classnames(styles.inputUsername, {
          [styles.inputUsernameError]: isUsernameMissing,
        })}
        placeholder="Insert your username here"
        value={username}
        onChange={onChangeUsername}
      />
      <p className={styles.errorMessage}>
        {getUsernameMissingText(isUsernameMissing, isUsernameInvalid)}
      </p>
      <input className={styles.button} type="submit" value="GO" />
    </form>
  </div>
);

function getUsernameMissingText(
  usernameMissing: boolean,
  usernameInvalid: boolean
): string | null {
  if (usernameMissing) {
    return "Should inform an username";
  }

  if (usernameInvalid) {
    return "User not found";
  }

  return null;
}

export default inputUsername;
