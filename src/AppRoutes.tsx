import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATHS } from './constants/routes';
import { COLLECTIONS, VIDEO_COURSES } from './constants/video';
import { Courses } from './pages/Courses';
import { Gitbooks } from './pages/Gitbooks';
import { Home } from './pages/Home';
import { VideoCourse } from './pages/VideoCourse';

export const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={PATHS.study} element={<Home />} />

        <Route path={PATHS.courses} element={<Courses />} />
        <Route path={PATHS.gitbooks} element={<Gitbooks />} />
        <Route
          path={`${PATHS.courses}/:bvid`}
          element={
            <VideoCourse data={VIDEO_COURSES} parentPath={PATHS.courses} />
          }
        />
        <Route
          path={`${PATHS.collections}/:bvid`}
          element={
            <VideoCourse data={COLLECTIONS} parentPath={PATHS.collections} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
