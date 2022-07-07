import { FC } from 'react';
import { CoursesCards } from '../../components/StudyCardsWithData';

export const Courses: FC = () => {
  document.title = '我的课堂';

  return <CoursesCards />;
};
