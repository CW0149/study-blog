import { FC } from 'react';
import { CollectionCards } from '../../components/StudyCardsWithData';

export const Collections: FC = () => {
  document.title = '我的收藏';

  return <CollectionCards />;
};
