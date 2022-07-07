import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATHS } from './constants/routes';
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
        <Route path={`${PATHS.courses}/:bvid`} element={<VideoCourse />} />
      </Routes>
    </BrowserRouter>
  );
};
