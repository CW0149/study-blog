import { FC } from 'react';
import {
  alpha,
  AppBar,
  Box,
  Divider,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import {
  CollectionCards,
  CoursesCards,
  GitbooksCards,
} from '../../components/StudyCardsWithData';
import { ReactComponent as Logo } from '../../images/svg/logo.svg';
import { ReactComponent as MobileLogo } from '../../images/svg/mobileLogo.svg';
import { PATHS } from '../../constants/routes';

const COLORS = [blue['200'], blue['100'], blue['50']];

const sections = [
  {
    name: '经济学课程',
    component: CoursesCards,
  },
  {
    name: '我的收藏',
    component: CollectionCards,
  },
  {
    name: '笔记本',
    component: GitbooksCards,
  },
];

export const Home: FC = () => {
  document.title = '我的学习';

  return (
    <Box>
      <AppBar sx={{ pt: 0.5, pb: 0.5 }}>
        <Toolbar>
          <Box width={120} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link href={PATHS.home}>
              <Logo />
            </Link>
          </Box>
          <Box width={200} sx={{ display: { xs: 'block', sm: 'none' } }}>
            <Link href={PATHS.home}>
              <MobileLogo />
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      <Box pt={1}>
        <Toolbar />
        {sections.map(({ name, component: Component }, i) => (
          <Box
            key={name}
            pt={2}
            sx={{ background: alpha(COLORS[i], 0.2) }}
            borderTop={`.5px dotted ${alpha(COLORS[i], 1)}`}
          >
            <Typography
              variant="h5"
              sx={{ ml: { xs: 2, md: 3 } }}
              color="text.primary"
            >
              {name}
            </Typography>
            <Component />
          </Box>
        ))}
      </Box>

      <Footer />
    </Box>
  );
};

const Footer: FC = () => {
  return (
    <Box
      bgcolor={grey[100]}
      p={1}
      pl={2}
      pr={2}
      color="text.secondary"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      textAlign="center"
      borderTop={`1px solid ${grey[200]}`}
      boxSizing="border-box"
    >
      <Typography variant="caption" display="block">
        &copy; 2022 Ruixuan Huang, All Rights Reserved
      </Typography>

      <Divider orientation="vertical" flexItem sx={{ ml: 1, mr: 1 }} />

      <Typography variant="caption">
        互联网ICP备案：
        <Link
          underline="none"
          href="https://beian.miit.gov.cn"
          target="_blank"
          color="inherit"
        >
          粤ICP备2022081904号-1
        </Link>
      </Typography>
    </Box>
  );
};
