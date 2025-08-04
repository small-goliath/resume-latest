import { Award as AwardType } from '../types';
import styles from './ListComponent.module.css';

type AwardsProps = {
  items: AwardType[];
};

const Awards = ({ items }: AwardsProps) => {
  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <li key={index} className={styles.listItem}>
          <strong>{item.awardName}</strong> - {item.category}
        </li>
      ))}
    </ul>
  );
};

export default Awards;
