import { Menu } from '@mui/icons-material';
import {
  AppBar,
  AppBarProps,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { FC } from 'react';

type Props = {
  title?: string;
  handleDrawerToggle: () => void;
  appBarProps?: AppBarProps;
};

export const VideoCourseTopBar: FC<Props> = ({
  title,
  handleDrawerToggle,
  appBarProps,
}) => {
  return (
    <AppBar {...appBarProps}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
