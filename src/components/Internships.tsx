// src/components/Internships.tsx
import { Internship as InternshipType } from '../types';
import styles from './ListComponent.module.css';

type InternshipsProps = {
  items: InternshipType[];
};

const Internships = ({ items }: InternshipsProps) => {
  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <li key={index} className={styles.listItem}>
          <strong>{item.company}</strong>: {item.description}
        </li>
      ))}
    </ul>
  );
};

export default Internships;
