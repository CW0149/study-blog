import { ArrowForward } from '@mui/icons-material';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Link as MuiLink,
} from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  data: {
    key: string | number;
    title: string;
    linkTo: string;
  }[];
  cardMedia: FC<any>;
  linkConfig: {
    isUrl: boolean;
    target?: string;
    linkText: string;
  };
};
export const StudyCards: FC<Props> = ({ data, cardMedia, linkConfig }) => {
  return (
    <Box display="flex" flexWrap="wrap" padding={{ xs: 2, md: 1 }}>
      {data.map((item) => (
        <Card
          key={item.key}
          sx={{
            maxWidth: {
              md: 500,
            },
            width: {
              xs: '100%',
              md: '23%',
            },
            margin: {
              xs: 0,
              md: '1%',
            },
            mb: {
              xs: 2,
            },
          }}
        >
          {cardMedia(item)}

          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              fontWeight={400}
            >
              {item.title}
            </Typography>
          </CardContent>
          <CardActions>
            {linkConfig.isUrl ? (
              <MuiLink
                href={item.linkTo}
                underline="none"
                target={linkConfig.target}
              >
                <Button startIcon={<ArrowForward />}>
                  {linkConfig.linkText}
                </Button>
              </MuiLink>
            ) : (
              <Link to={item.linkTo}>
                <Button startIcon={<ArrowForward />}>
                  {linkConfig.linkText}
                </Button>
              </Link>
            )}
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};
