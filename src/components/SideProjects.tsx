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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.externalLinkIcon}
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
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
