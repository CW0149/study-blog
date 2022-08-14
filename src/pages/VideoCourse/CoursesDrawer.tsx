import { ArrowBack } from '@mui/icons-material';
import { MenuItem, MenuList, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { PATHS } from '../../constants/routes';
import { Course } from '../../constants/types';

interface Props {
  drawerWidth: number;
  courses: Course[];
  drawerOpen: boolean;
  handleDrawerToggle: () => void;

  linkTo: (id: string) => string;
  testActive?: (location: Window['location'], id: string) => boolean;
}

export const CoursesDrawer: FC<Props> = ({
  drawerWidth,
  courses,
  drawerOpen,
  handleDrawerToggle,

  linkTo,
  testActive,
}) => {
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <MenuList>
        <NavLink to={PATHS.study}>
          <MenuItem>
            <ArrowBack fontSize="small" />
            <Typography>All</Typography>
          </MenuItem>
        </NavLink>
        {courses.map(({ id, title }) => (
          <NavLink key={id} to={linkTo(id)}>
            {({ isActive }) => (
              <MenuItem
                selected={
                  isActive &&
                  (testActive ? testActive(window.location, id) : true)
                }
              >
                <Typography noWrap>{title}</Typography>
              </MenuItem>
            )}
          </NavLink>
        ))}
      </MenuList>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={document.body}
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
