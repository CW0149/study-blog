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

export type StudyCardsProps = {
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
const CARD_GAPPING_PERCENTAGE = 0.8;

export const StudyCards: FC<StudyCardsProps> = ({
  data,
  cardMedia,
  linkConfig,
}) => {
  return (
    <Box padding={{ xs: 2, md: 3 }}>
      <Box
        display="flex"
        flexWrap="wrap"
        sx={{ m: { md: `-${CARD_GAPPING_PERCENTAGE}%` } }}
      >
        {data.map((item) => (
          <Card
            key={item.key}
            sx={{
              width: {
                xs: '100%',
                md: `${25 - CARD_GAPPING_PERCENTAGE * 2}%`,
              },
              margin: {
                xs: 0,
                md: `${CARD_GAPPING_PERCENTAGE}%`,
              },
              mb: {
                xs: 2,
              },
            }}
          >
            <Box mt={-1}>{cardMedia(item)}</Box>
            <CardContent
              sx={{ mb: -1, mt: -2, position: 'relative', background: '#fff' }}
            >
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
    </Box>
  );
};
