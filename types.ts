export interface GameUpdate {
  version: string;
  date: string;
  title: string;
  changes: string[];
  bugFixes?: string[];
  screenshots?: string[];
}

export interface Game {
  id: string;
  title: string;
  description: string;
  genre: string;
  imageUrl: string;
  tags: string[];
  playUrl?: string;
  releaseDate: string;
  fullDescription?: string;
  updates?: GameUpdate[];
  keyFeatures?: string[];
  images?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}