// src/components/Timeline.tsx
import { Footprint } from '../types';
import styles from './Timeline.module.css';

type TimelineProps = {
  footprints: Footprint[];
};

const Timeline = ({ footprints }: TimelineProps) => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.sectionTitle}>타임라인</h2>
      <div className={styles.timeline}>
        {footprints.map((footprint, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineYear}>{footprint.startYear}</div>
            <div className={styles.timelineContent}>
              <h3>{footprint.company}</h3>
              <p>{footprint.role}</p>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Timeline;
