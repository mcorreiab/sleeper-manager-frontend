import styles from "./summaryItem.module.css";

export interface summaryItemProps {
  summaryLabel: string;
  imagePath: string;
  imageDescription: string;
  quantity: number;
  text: string;
}

const summaryItem: React.FunctionComponent<summaryItemProps> = ({
  summaryLabel,
  imagePath,
  imageDescription,
  quantity,
  text,
}) => (
  <li aria-label={summaryLabel} className={styles.text}>
    <img className={styles.badge} src={imagePath} alt={imageDescription} />
    <strong className={styles.number}>{quantity} </strong>
    <p className={styles.textItem}>{text}</p>
  </li>
);

export default summaryItem;
