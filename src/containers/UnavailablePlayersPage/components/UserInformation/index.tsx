import Image from "next/image";
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
    <div className={styles.userAvatar}>
      <Image src={avatarUrl} alt="User avatar" width={32} height={32} />
    </div>
    <p aria-label="Username" className={styles.username}>
      {username}
    </p>
  </div>
);

export default userInformationSection;
