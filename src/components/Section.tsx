// src/components/Section.tsx
import styles from './Section.module.css';

const Section = ({ title, children, id }: { title: string; children: React.ReactNode; id: string }) => (
  <section id={id} className={styles.section}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    {children}
  </section>
);

export default Section;
