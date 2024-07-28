interface ProjectMaterial {
    label: string;
    path: string;
  }
  
export interface Project {
    id: string;
    title: string;
    type: string;
    siteLink?: string;
    titleLink: string;
    titleLinkLabel: string;
    description: string;
    descriptionImage?: string;
    frontPageDesc?: string;
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

export interface FrontPageHeader {
  title: string;
  text: string[];
}

export interface FrontPageContact {
  contactName: string;
  shortSummary: string;
  photo: string;
}

export interface FrontPageParagraph {
  title: string;
  content: string;
  link?: string;
}

export interface FrontPage {
  header: FrontPageHeader;
  contact: FrontPageContact;
  paragraphs: FrontPageParagraph[];
}

export interface Contact {
  address: string[];
  phone: string[];
  email: string[];
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