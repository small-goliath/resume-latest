// src/components/Research.tsx
import { Research as ResearchType } from '../types';
import styles from './ListComponent.module.css';

type ResearchProps = {
  items: ResearchType[];
};

const Research = ({ items }: ResearchProps) => {
  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <li key={index} className={styles.listItem}>
          <strong>{item.title}</strong> ({item.category} - {item.remarks})
          {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.link}> [링크]</a>}
          {item.cdnUrl && <a href={item.cdnUrl} target="_blank" rel="noopener noreferrer" className={styles.link}> (열람하기)</a>}
        </li>
      ))}
    </ul>
  );
};

export default Research;
