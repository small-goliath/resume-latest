import { Education as EducationType } from '../types';
import styles from './ListComponent.module.css';

type EducationProps = {
  items: EducationType[];
};

const Education = ({ items }: EducationProps) => {
  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <li key={index} className={styles.listItem}>
          <strong>{item.institution}</strong> - {item.category} ({item.date})
        </li>
      ))}
    </ul>
  );
};

export default Education;
