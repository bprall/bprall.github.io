interface ProjectMaterial {
    label: string;
    path: string;
  }
  
export interface Project {
    id: string;
    title: string;
    type: string;
    titleLink: string;
    titleLinkLabel: string;
    description: string;
    descriptionImage?: string;
    contentImages?: string[];
    contents?: string;
    materials?: ProjectMaterial[];
  }

export interface About {
  photo: string;
  name: string;
  education: string;
  majors: string[];
  selfSummary: string;
  moreDetails: {
    title: string;
    content: string;
  }[];
}

export interface FrontPageSection {
  title: string;
  content: string;
  link?: string;
}

export interface FrontPage {
  frontPage: FrontPageSection[];
}

export interface Contact {
  address: string;
  phone: string;
  email: string;
  github: string[];
  url: string[];
  linkedin: string[];
  icons: string[];
}

export interface NewsItem {
  title: string;
  date: string;
}

export interface NewsData {
  news: NewsItem[];
}