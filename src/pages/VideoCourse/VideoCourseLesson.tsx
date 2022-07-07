import { ExpandMore, OpenInNew } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { FC, useEffect, useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Lesson, NotePathObj } from '../../constants/types';
import { getNotePathObj } from '../../helpers/video';

type Props = {
  lesson: Lesson;
  expanded?: Lesson['cid'];
  handleChange: (cid: Lesson['cid']) => () => void;
};
export const VideoCourseLesson: FC<Props> = ({
  lesson,
  handleChange,
  expanded,
}) => {
  const [summary, setSummary] = useState('');
  const [thoughts, setThoughts] = useState('');
  const { summary: summaryPath, thoughts: thoughtsPath } = useMemo(
    () => getNotePathObj(lesson.noteFolderName) || ({} as NotePathObj),
    [lesson.noteFolderName]
  );

  useEffect(() => {
    summaryPath &&
      fetch(summaryPath)
        .then((res) => res.text())
        .then((data) => setSummary(data));

    thoughtsPath &&
      fetch(thoughtsPath)
        .then((res) => res.text())
        .then((data) => setThoughts(data));
  }, [summaryPath, thoughtsPath]);

  return (
    <Accordion
      expanded={expanded === lesson.cid}
      onChange={handleChange(lesson.cid)}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1bh-content"
      >
        <Typography>
          <Link href={lesson.url} target="_blank" underline="none">
            <OpenInNew fontSize="small" sx={{ verticalAlign: 'middle' }} />
            <Box component="span" sx={{ verticalAlign: 'middle' }} m={[0, 0.5]}>
              {lesson.title}
            </Box>
          </Link>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {[summary, thoughts].map((md, i) => (
          <ReactMarkdown
            key={i}
            children={md}
            components={{
              h1: ({ node, ...props }) => (
                <Typography variant="h5" component="div" {...props} />
              ),
            }}
          />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};
