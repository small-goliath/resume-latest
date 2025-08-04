import { ResumeData } from '../types';
import styles from './Profile.module.css';

type ProfileProps = {
  profile: ResumeData['profile'];
  links: ResumeData['links'];
};

const Profile = ({ profile, links }: ProfileProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.profileContainer}>
        <img src="profile.png" alt="프로필 사진" className={styles.profileImage} />
        <div>
          <h1 className={styles.profileName}>{profile.name}</h1>
          <p className={styles.profileMbti}>MBTI: {profile.mbti}</p>
        </div>
      </div>
      <div className={styles.links}>
        <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={links.blog} target="_blank" rel="noopener noreferrer">기술 블로그</a>
        <a href={links.resume} target="_blank" rel="noopener noreferrer">경력기술서 열람</a>
      </div>
    </header>
  );
};

export default Profile;
