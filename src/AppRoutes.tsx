import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATHS } from './constants/routes';
import {
  MY_COLLECTIONS,
  ECONOMIC_COURSES,
  FRONTEND_COURSES,
} from './constants/video';
import { Economics } from './pages/Economics';
import { Gitbooks } from './pages/Gitbooks';
import { Home } from './pages/Home';
import { MediaCourse, VideoCourse } from './pages/VideoCourse';

export const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={PATHS.study} element={<Home />} />
        {/* Individual pages, commonly not used */}
        <Route path={PATHS.economics} element={<Economics />} />
        <Route path={PATHS.gitbooks} element={<Gitbooks />} />

        {/* Detail pages */}
        <Route
          path={`${PATHS.economics}/:bvid`}
          element={
            <VideoCourse data={ECONOMIC_COURSES} parentPath={PATHS.economics} />
          }
        />
        <Route
          path={`${PATHS.frontend}/:bvid`}
          element={
            <VideoCourse data={FRONTEND_COURSES} parentPath={PATHS.frontend} />
          }
        />
        <Route
          path={`${PATHS.collections}/:bvid`}
          element={
            <VideoCourse data={MY_COLLECTIONS} parentPath={PATHS.collections} />
          }
        />
        <Route
          path={`${PATHS.medias}/:mid`}
          element={<MediaCourse parentPath={PATHS.medias} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
