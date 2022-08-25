import { FC } from 'react';
import { CollectionCards } from '../../components/StudyCardsWithData';
import { PATHS } from '../../constants/routes';
import { MY_COLLECTIONS } from '../../constants/video';

export const Collections: FC = () => {
  document.title = '我的收藏';

  return (
    <CollectionCards pathPrefix={PATHS.collections} courses={MY_COLLECTIONS} />
  );
};
