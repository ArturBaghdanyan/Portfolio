export interface IProject {
  id: string;
  title: string;
  description: string;
  items?: {
    id: string;
    title: string;
    description: string;
  }[];
  site?: string;
  link: string;
}
