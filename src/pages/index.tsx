import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Activity, Award, Education, Footprint, Internship, Research, ResumeData, SideProject, Skill, Volunteering } from '../types';
import styles from './index.module.css';

import dynamic from 'next/dynamic';
import ActivitiesComponent from '../components/Activities';
import AwardsComponent from '../components/Awards';
import EducationComponent from '../components/Education';
import InternshipsComponent from '../components/Internships';
import Navbar from '../components/Navbar';
import PeerReviewsComponent from '../components/PeerReviews';
import Profile from '../components/Profile';
import ResearchComponent from '../components/Research';
import Section from '../components/Section';
import SideProjectsComponent from '../components/SideProjects';
import SkillsComponent from '../components/Skills';
import Timeline from '../components/Timeline';
import VolunteeringComponent from '../components/Volunteering';

const ScheduleClock = dynamic(() => import('../components/ScheduleClock'), {
  ssr: false,
});

const getEnvJson = <T,>(key: string, defaultValue: T): T => {
  try {
    const value = process.env[key];
    return value ? JSON.parse(value) : defaultValue;
  } catch (error) {
    console.error(`Error parsing JSON from env var ${key}:`, error);
    return defaultValue;
  }
};

const Home: NextPage<{ data: ResumeData }> = ({ data }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{data.profile.name}의 이력서</title>
        <meta name="description" content={`${data.profile.name}의 기술 이력서`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Profile profile={data.profile} links={data.links} />
      <Navbar />
      <Timeline footprints={data.footprints} />

      <main className={styles.main}>
        <Section title="교육사항" id="education">
          <EducationComponent items={data.education} />
        </Section>

        <Section title="역량" id="skills">
          <SkillsComponent skills={data.skills} />
        </Section>

        <Section title="수상" id="awards">
          <AwardsComponent items={data.awards} />
        </Section>

        <Section title="봉사활동" id="volunteering">
          <VolunteeringComponent items={data.volunteering} />
        </Section>

        <Section title="대/외활동" id="activities">
          <ActivitiesComponent items={data.activities} />
        </Section>

        <Section title="인턴십" id="internships">
          <InternshipsComponent items={data.internships} />
        </Section>

        <Section title="연구활동" id="research">
          <ResearchComponent items={data.research} />
        </Section>

        <Section title="동료평가" id="peer-reviews">
          <PeerReviewsComponent reviews={data.peerReviews} />
        </Section>
        
        <Section title="사이드프로젝트" id="side-projects">
          <SideProjectsComponent items={data.sideProjects} />
        </Section>

      </main>

      <div className={styles.scheduleContainer}>
        <ScheduleClock />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data: ResumeData = {
    profile: {
      name: process.env.NEXT_PUBLIC_NAME || '이름 없음',
      mbti: process.env.NEXT_PUBLIC_MBTI || '정보 없음',
    },
    links: {
      github: process.env.NEXT_PUBLIC_GITHUB_URL || '#',
      blog: process.env.NEXT_PUBLIC_BLOG_URL || '#',
      resume: process.env.NEXT_PUBLIC_RESUME_URL || '#',
    },
    education: getEnvJson<Education[]>('NEXT_PUBLIC_EDUCATION', []),
    skills: getEnvJson<Skill[]>('NEXT_PUBLIC_SKILLS', []),
    awards: getEnvJson<Award[]>('NEXT_PUBLIC_AWARDS', []),
    volunteering: getEnvJson<Volunteering[]>('NEXT_PUBLIC_VOLUNTEERING', []),
    activities: getEnvJson<Activity[]>('NEXT_PUBLIC_ACTIVITIES', []),
    internships: getEnvJson<Internship[]>('NEXT_PUBLIC_INTERNSHIPS', []),
    research: getEnvJson<Research[]>('NEXT_PUBLIC_RESEARCH', []),
    peerReviews: getEnvJson<string[]>('NEXT_PUBLIC_PEER_REVIEWS', []),
    footprints: getEnvJson<Footprint[]>('NEXT_PUBLIC_FOOTPRINTS', []),
    sideProjects: getEnvJson<SideProject[]>('NEXT_PUBLIC_SIDE_PROJECTS', []),
  };

  return {
    props: {
      data,
    },
  };
};

export default Home;