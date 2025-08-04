import { Volunteering as VolunteeringType } from '../types';
import styles from './ListComponent.module.css';

type VolunteeringProps = {
  items: VolunteeringType[];
};

const Volunteering = ({ items }: VolunteeringProps) => {
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

export default Volunteering;
