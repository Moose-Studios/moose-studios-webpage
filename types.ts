export interface GameUpdate {
  version: string;
  date: string;
  title: string;
  changes: string[];
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
}

export interface NavItem {
  label: string;
  href: string;
}