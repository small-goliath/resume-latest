import React from 'react';
import { SideProject } from '../types';
import styles from './SideProjects.module.css';

interface SideProjectsProps {
  items: SideProject[];
}

const SideProjectsComponent = ({ items }: SideProjectsProps) => {
  if (!items || items.length === 0) {
    return <p>진행한 사이드 프로젝트가 없습니다.</p>;
  }

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div key={index} className={styles.project}>
          <h3 className={styles.title}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </h3>
          <p className={styles.description}>{item.description}</p>
          <span className={styles.status}>{item.status}</span>
        </div>
      ))}
    </div>
  );
};

export default SideProjectsComponent;
