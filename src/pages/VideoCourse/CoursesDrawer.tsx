import { ArrowBack } from '@mui/icons-material';
import { MenuItem, MenuList, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { PATHS } from '../../constants/routes';
import { BCourse } from '../../constants/types';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  drawerWidth: number;
  courses: BCourse[];
  drawerOpen: boolean;
  handleDrawerToggle: () => void;
}

export const CoursesDrawer: FC<Props> = ({
  window,
  drawerWidth,
  courses,
  drawerOpen,
  handleDrawerToggle,
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
        {courses.map(({ bvid, title }) => (
          <NavLink key={bvid} to={`/study/courses/${bvid}`}>
            {({ isActive }) => (
              <MenuItem selected={isActive}>
                <Typography noWrap>{title}</Typography>
              </MenuItem>
            )}
          </NavLink>
        ))}
      </MenuList>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
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
