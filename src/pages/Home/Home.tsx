import { FC, useEffect } from 'react';
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
  GitbooksCards,
  MediaCards,
} from '../../components/StudyCardsWithData';
import { ReactComponent as Logo } from '../../images/svg/logo.svg';
import { ReactComponent as MobileLogo } from '../../images/svg/mobileLogo.svg';
import { PATHS } from '../../constants/routes';
import gongan from '../../images/gongan.png';
import {
  MEDIAS,
  ECONOMIC_COURSES,
  FRONTEND_COURSES,
  MY_COLLECTIONS,
} from '../../constants/video';

const COLORS = [
  blue['500'],
  blue['400'],
  blue['300'],
  blue['200'],
  blue['100'],
  blue['50'],
];

const sections = [
  {
    id: 'economicCourses',
    name: '经济学课程',
    component: CollectionCards,
    props: {
      pathPrefix: PATHS.economics,
      courses: ECONOMIC_COURSES,
    },
  },
  {
    id: 'frontend',
    name: '前端课程',
    component: CollectionCards,
    props: {
      pathPrefix: PATHS.frontend,
      courses: FRONTEND_COURSES,
    },
  },
  {
    id: 'Sadhguru',
    name: 'Sadhguru',
    component: MediaCards,
    props: {
      media: MEDIAS.Sadhguru,
    },
  },
  {
    id: 'Krishnamurti',
    name: 'Krishnamurti',
    component: MediaCards,
    props: {
      media: MEDIAS.Krishnamurti,
    },
  },
  {
    id: 'myCollections',
    name: '我的收藏',
    component: CollectionCards,
    props: {
      pathPrefix: PATHS.collections,
      courses: MY_COLLECTIONS,
    },
  },
  {
    id: 'myNotes',
    name: '笔记本',
    component: GitbooksCards,
  },
];

export const Home: FC = () => {
  document.title = '我的学习';

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      window.location.hash = '#';
      window.location.hash = hash;
    }
  });

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
        {sections.map(({ name, component: Component, id, props = {} }, i) => (
          <Box
            key={name}
            pt={2}
            sx={{ background: alpha(COLORS[i], 0.2) }}
            borderTop={`.5px dotted ${alpha(COLORS[i], 1)}`}
          >
            <Link href={`#${id}`} underline="none" id={id}>
              <Typography
                variant="h5"
                sx={{ ml: { xs: 2, md: 3 } }}
                color="text.primary"
              >
                {name}
              </Typography>
            </Link>

            <Component {...(props as any)} />
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
        <Link
          underline="none"
          href="https://beian.miit.gov.cn"
          target="_blank"
          color="inherit"
        >
          粤ICP备 2022081904号-1
        </Link>
      </Typography>

      <Divider orientation="vertical" flexItem sx={{ ml: 1, mr: 1 }} />

      <Typography variant="caption">
        <img
          src={gongan}
          alt="公安图标"
          width="20"
          style={{
            verticalAlign: 'middle',
            marginRight: '4px',
            marginTop: '-2px',
          }}
        />
        <Link
          underline="none"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030602006956"
          target="_blank"
          color="inherit"
        >
          粤公网安备 44030602006956号
        </Link>
      </Typography>
    </Box>
  );
};
