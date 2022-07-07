import { FC } from 'react';
import { GitbooksCards } from '../../components/StudyCardsWithData';

export const Gitbooks: FC = () => {
  document.title = '我的笔记';

  return <GitbooksCards />;
};
