export interface Education {
  institution: string;
  category: string;
  date: string;
}

export interface Skill {
  category: string;
  list: string[];
}

export interface Award {
  awardName: string;
  category: string;
  certificateImageUrl?: string;
  link?: string;
}

export interface Volunteering {
  institution: string;
  description: string;
}

export interface Activity {
  institution: string;
  description: string;
}

export interface Internship {
  company: string;
  description: string;
}

export interface Research {
  category: string;
  title: string;
  remarks: string;
  link: string;
  cdnUrl?: string;
}

export interface SideProject {
  title: string;
  description: string;
  status: string;
  link: string;
}

export interface Footprint {
  company: string;
  role: string;
  startYear: string;
}

export interface ResumeData {
  profile: {
    name: string;
    mbti: string;
  };
  links: {
    github: string;
    blog: string;
    resume: string;
  };
  education: Education[];
  skills: Skill[];
  awards: Award[];
  volunteering: Volunteering[];
  activities: Activity[];
  internships: Internship[];
  research: Research[];
  peerReviews: string[];
  footprints: Footprint[];
  sideProjects: SideProject[];
}
