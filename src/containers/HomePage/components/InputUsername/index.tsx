import { FormEvent, ChangeEvent } from "react";
import classnames from "classnames";
import styles from "./index.module.css";

interface Props {
  className: string;
  onFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
  username: string;
  onChangeUsername: (event: ChangeEvent<HTMLInputElement>) => void;
  isUsernameMissing: boolean;
}

const inputUsername: React.FunctionComponent<Props> = ({
  className,
  onFormSubmit,
  username,
  onChangeUsername,
  isUsernameMissing,
}) => {
  const usernameMissing = isUsernameMissing
    ? "Should inform an username"
    : null;

  return (
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
        <p className={styles.errorMessage}>{usernameMissing}</p>
        <input className={styles.button} type="submit" value="GO" />
      </form>
    </div>
  );
};
export default inputUsername;
