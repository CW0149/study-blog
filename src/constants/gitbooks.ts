import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey,
} from '@mui/material/colors';
import { GitBook } from './types';

/**
 * https://mui.com/material-ui/customization/color/#picking-colors
 */
const COLORS = [
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey,
];

const GIT_BOOK_PATH_PREFIX = 'https://byprinciples.com/gitbooks/';

export const GIT_BOOKS: GitBook[] = [
  {
    name: '随笔',
    path: `Thoughts`,
    icon: 'NoteAlt',
  },
  {
    name: `便利贴`,
    path: `Snippet`,
    icon: 'ContentPaste',
  },
  {
    name: `技术笔记`,
    path: `TechNote`,
    icon: 'Computer',
  },
  // {
  //   name: `React Fundamentals`,
  //   path: `ReactFundamentals`,
  //   icon: 'NoteAlt',
  //   color: COLOR[100],
  // },
  {
    name: `Server Side`,
    path: `ServerSide`,
    icon: 'Storage',
  },
  {
    name: `LeetCode (Easy)`,
    path: `LeetCodeEasy`,
    icon: 'Code',
  },
  {
    name: `LeetCode（Medium）`,
    path: `LeetCodeMedium`,
    icon: 'Code',
  },
  {
    name: `LeetCode（Hard）`,
    path: `LeetCodeHard`,
    icon: 'Code',
  },
  {
    name: 'Docs',
    path: `Docs`,
    icon: 'FindInPage',
  },
].map((item, i) => ({
  ...item,
  link: `${GIT_BOOK_PATH_PREFIX}/${item.path}`,
  color: COLORS[i][200],
}));
