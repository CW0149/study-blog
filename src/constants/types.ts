export type Course = {
  id: string;
  title: string;
  noteFolderName?: string;
};

export type BCourse = {
  bvid: string;
  title: string;
  cover: string;
  noteFolderName?: string;
};

export type BMedia = {
  mid: string;
  title: string;
  cover: string;
};

export type Lesson = {
  id: number;
  title: string;
  url: string;
  num: number;
  noteFolderName?: string;
};

export type NotePathObj = {
  summary: string;
  thoughts: string;
};

export type GitBook = {
  name: string;
  link: string;
  icon: any;
  color: string;
};

export type MediaItem = {
  bvid: string;
  title: string;
  url: string;
};

export type MediaTlistItem = {
  tid: string;
  name: string;
};
