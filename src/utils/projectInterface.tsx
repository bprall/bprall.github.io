interface ProjectMaterial {
    label: string;
    path: string;
  }
  
export default interface Project {
    id: string;
    title: string;
    type: string;
    titleLink: string;
    titleLinkLabel: string;
    description: string;
    contents?: string;
    materials?: ProjectMaterial[];
  }