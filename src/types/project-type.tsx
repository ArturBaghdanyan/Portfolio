export interface IProjectItem {
  id: string;
  title: string;
  description: string;
}
export interface IProject {
  image?: string | Blob | undefined;
  id: string;
  key: string;
  date?: string;
  title: string;
  description: string;
  items?: IProjectItem[];
  link: string;
  site?: string;
}
