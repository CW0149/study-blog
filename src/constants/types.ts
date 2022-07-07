export type BCourse = {
  bvid: string;
  title: string;
  cover: string;
  noteFolderName?: string;
};

export type Lesson = {
  cid: number;
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
