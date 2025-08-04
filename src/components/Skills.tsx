import { Skill } from '../types';
import styles from './Skills.module.css';

type SkillsProps = {
  skills: Skill[];
};

const Skills = ({ skills }: SkillsProps) => {
  return (
    <div>
      {skills.map((skill, index) => (
        <div key={index} className={styles.skillGroup}>
          <h3 className={styles.skillCategory}>{skill.category}</h3>
          <ul className={styles.skillList}>
            {Array.isArray(skill.list) && skill.list.map((item, idx) => (
              <li key={idx} className={styles.skillItem}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
