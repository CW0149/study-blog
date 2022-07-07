import { CardMedia } from '@mui/material';
import {
  Code,
  Computer,
  ContentPaste,
  FindInPage,
  NoteAlt,
  Storage,
} from '@mui/icons-material';
import { FC } from 'react';
import { StudyCards } from '../../components/StudyCards';
import { GIT_BOOKS } from '../../constants/gitbooks';
import { PATHS } from '../../constants/routes';
import { VIDEO_COURSES } from '../../constants/video';

const nameToComponent: Record<string, any> = {
  NoteAlt: NoteAlt,
  ContentPaste: ContentPaste,
  Computer: Computer,
  Code: Code,
  Storage: Storage,
  FindInPage: FindInPage,
};
const getReactElementByName = (name: string, props = {}) => {
  const Component = nameToComponent[name];

  return <Component {...props} />;
};

export const CoursesCards: FC = () => {
  const data = VIDEO_COURSES.map((course) => ({
    key: course.bvid,
    title: course.title,
    cover: course.cover,
    linkTo: `${PATHS.courses}/${course.bvid}`,
  }));

  return (
    <StudyCards
      data={data}
      linkConfig={{
        isUrl: false,
        linkText: '进入',
      }}
      cardMedia={({ cover }) => (
        <CardMedia
          component="img"
          sx={{
            height: { md: 180, xs: 300 },
          }}
          image={cover}
        />
      )}
    />
  );
};

export const GitbooksCards: FC = () => {
  const data = GIT_BOOKS.map((book) => ({
    key: book.link,
    title: book.name,
    linkTo: book.link,

    icon: book.icon,
    color: book.color,
  }));

  return (
    <StudyCards
      data={data}
      linkConfig={{
        isUrl: true,
        linkText: '访问',
        target: '_blank',
      }}
      cardMedia={({ color, icon }) => (
        <CardMedia
          sx={{
            display: 'flex',
            background: color,
            height: 180,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {getReactElementByName(icon, {
            sx: { width: 80, height: 80, color: 'white' },
          })}
        </CardMedia>
      )}
    />
  );
};
