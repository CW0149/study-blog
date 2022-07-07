import { CssBaseline, Skeleton, Stack, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Lesson } from '../../constants/types';
import { VIDEO_COURSES } from '../../constants/video';
import { fetchBvPlaylist } from '../../helpers/video';
import { CoursesDrawer } from './CoursesDrawer';
import { VideoCourseLesson } from './VideoCourseLesson';
import { VideoCourseTopBar } from './VideoCourseTopBar';

const drawerWidth = 240;

export const VideoCourse: FC = () => {
  const [lessons, setLessons] = useState([] as Lesson[]);
  const [expanded, setExpanded] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { bvid } = useParams();
  const course = useMemo(
    () => VIDEO_COURSES.find((item) => item.bvid === bvid),
    [bvid]
  );

  useEffect(() => {
    if (!bvid) return;

    setLoading(true);
    setLessons([]);

    fetchBvPlaylist(bvid).then((lessons) => {
      setLessons(
        lessons.map((lesson, i) => ({
          ...lesson,
          // Add here to avoid rerendering VideoCourseLesson caused by course change
          noteFolderName:
            course?.noteFolderName && `${course?.noteFolderName}/${i + 1}`,
        }))
      );
      setLoading(false);
    });
  }, [bvid, course?.noteFolderName]);

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
        title={course?.title}
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
        courses={VIDEO_COURSES}
        drawerOpen={drawerOpen}
        handleDrawerToggle={handleDrawerToggle}
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
                key={lesson.cid}
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
