import styles from "./index.module.css";

interface Props {
  username: string;
  avatarUrl: string;
}

const userInformationSection: React.FunctionComponent<Props> = ({
  username,
  avatarUrl,
}) => (
  <div className={styles.userInformation}>
    <img className={styles.userAvatar} src={avatarUrl} alt="User avatar" />
    <p aria-label="Username" className={styles.username}>
      {username}
    </p>
  </div>
);

export default userInformationSection;
