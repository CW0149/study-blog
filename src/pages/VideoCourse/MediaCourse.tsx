import { CssBaseline, Skeleton, Stack, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useEffect, useMemo, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Course, Lesson } from '../../constants/types';
import { MEDIA_ID_TO_MEDIA } from '../../constants/video';
import { fetchMediaList, fetchTlist } from '../../helpers/video';
import { CoursesDrawer } from './CoursesDrawer';
import { VideoCourseLesson } from './VideoCourseLesson';
import { VideoCourseTopBar } from './VideoCourseTopBar';

const drawerWidth = 240;

type Props = {
  parentPath: string;
};
export const MediaCourse: FC<Props> = ({ parentPath }) => {
  const [lessons, setLessons] = useState([] as Lesson[]);
  const [expanded, setExpanded] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { mid } = useParams();
  const [searchParams] = useSearchParams();
  const [menu, setMenu] = useState<Course[]>([]);
  const media = useMemo(() => MEDIA_ID_TO_MEDIA[mid as string], [mid]);

  useEffect(() => {
    const getData = async () => {
      if (!mid) return;

      const tlist = await fetchTlist(mid);

      setMenu(
        tlist.map((item) => ({
          id: item.tid,
          title: `${media.title}-${item.name}`,
        }))
      );
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const course = useMemo(
    () => menu.find((item) => String(item.id) === searchParams.get('tid')),
    [menu, searchParams]
  );

  useEffect(() => {
    if (!mid) return;

    setLoading(true);
    setLessons([]);

    const tid = searchParams.get('tid') as string;
    fetchMediaList(mid, tid).then((lessons) => {
      setLessons(lessons);
      setLoading(false);
    });
  }, [mid, searchParams]);

  if (!course) return null;

  document.title = course.title || '';

  const handleChange = (panelId: number) => {
    return () => {
      setExpanded(panelId);
    };
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <VideoCourseTopBar
        title={`${course?.title} | ${lessons.length}节`}
        appBarProps={{
          position: 'fixed',
          sx: {
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          },
        }}
        handleDrawerToggle={handleDrawerToggle}
      />

      <CoursesDrawer
        drawerWidth={drawerWidth}
        courses={menu}
        drawerOpen={drawerOpen}
        handleDrawerToggle={handleDrawerToggle}
        linkTo={(id) => `${parentPath}/${mid}?tid=${id}`}
        testActive={(location, id) =>
          new URLSearchParams(location.search).get('tid') === String(id)
        }
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {loading ? (
          <Box display="flex" alignItems="center" justifyContent="center">
            <Stack width="100%">
              {[...Array(7)].map((i) => (
                <Skeleton key={Math.random()} variant="text" height="12vh" />
              ))}
            </Stack>
          </Box>
        ) : (
          <>
            {lessons.map((lesson) => (
              <VideoCourseLesson
                key={lesson.id}
                lesson={lesson}
                handleChange={handleChange}
                expanded={expanded}
              />
            ))}
          </>
        )}
      </Box>
    </Box>
  );
};
