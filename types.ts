
export enum ProjectCategory {
  ALL = "All",
  WEB_DESIGN = "Web Design",
  ILLUSTRATION_2D = "2D Illustration",
  ILLUSTRATION_3D = "3D Illustration",
  ANIMATION = "Animation",
}

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  imageUrl: string;
  description: string;
}