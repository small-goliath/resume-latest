// src/components/Activities.tsx
import { Activity as ActivityType } from '../types';
import styles from './ListComponent.module.css';

type ActivitiesProps = {
  items: ActivityType[];
};

const Activities = ({ items }: ActivitiesProps) => {
  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <li key={index} className={styles.listItem}>
          <strong>{item.institution}</strong>: {item.description}
        </li>
      ))}
    </ul>
  );
};

export default Activities;
