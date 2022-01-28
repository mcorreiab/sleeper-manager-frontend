import Image from "next/image";
import styles from "./summaryItem.module.css";
import LeagueBadge from "./leagueBadge";

export interface summaryItemProps {
  summaryLabel: string;
  imagePath: string;
  imageDescription: string;
  quantity: number;
  text: string;
}

const summaryItem: React.FunctionComponent<summaryItemProps> = ({
  summaryLabel,
  imageDescription,
  quantity,
  text,
}) => (
  <li aria-label={summaryLabel} className={styles.text}>
    <LeagueBadge className={styles.badge} title={imageDescription} />
    <strong className={styles.number}>{quantity} </strong>
    <p className={styles.textItem}>{text}</p>
  </li>
);

export default summaryItem;
