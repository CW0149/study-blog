import { Lesson, MediaTlistItem, NotePathObj } from '../constants/types';

export const fetchBvPlaylist = (bvid: string): Promise<Lesson[]> => {
  return fetch(`/api/courses/${bvid}/lessons`, {
    method: 'GET',
  }).then((res) => res.json());
};

export const getNotePathObj = (folderName?: string): NotePathObj | null => {
  if (!folderName) return null;

  const folder = `${process.env.PUBLIC_URL}/notes/${folderName}`;
  return {
    summary: `${folder}/summary.md`,
    thoughts: `${folder}/thoughts.md`,
  };
};

export const fetchMediaList = (mid: string, tid: string) => {
  return fetch(`/api/courses/media_list/${mid}?tid=${tid}`, {
    method: 'GET',
  }).then((res) => res.json());
};

export const fetchTlist = (mid: string): Promise<MediaTlistItem[]> => {
  return fetch(`/api/courses/media_list/${mid}/t_list`, {
    method: 'GET',
  }).then((res) => res.json());
};
