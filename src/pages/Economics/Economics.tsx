import { FC } from 'react';
import { CollectionCards } from '../../components/StudyCardsWithData';
import { PATHS } from '../../constants/routes';
import { ECONOMIC_COURSES } from '../../constants/video';

export const Economics: FC = () => {
  document.title = '经济课程';

  return (
    <CollectionCards pathPrefix={PATHS.economics} courses={ECONOMIC_COURSES} />
  );
};
