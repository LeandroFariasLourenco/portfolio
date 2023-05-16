import { Close } from '@mui/icons-material';
import {
  Button,
  Card,
  Grid,
  useTheme,
} from '@mui/material';
import cx from 'classnames';
import { FormattedMessage } from 'react-intl';
import { useResponsive } from '@/shared/hooks';
import { EResponsiveType } from '@/shared/models';
import { IStoryProps } from './props.interface';

import { useCallback } from 'react';
import { IHobbie } from '../models/hobbies.interface';

import './story.scss';

const Story = ({
  hobby,
  onClick,
  open,
}: IStoryProps) => {
  const theme = useTheme();
  const isMobile = useResponsive({ type: EResponsiveType.smaller });

  return (
    <Grid
      xs={isMobile ? 6 : 4}
      item
    >
      <Grid
        className="story-container"
        container
        alignItems="center"
        justifyContent="center"
        key={hobby.color}
      >
        <Grid
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <button
            className="story-topic"
            onClick={() => {
              onClick(hobby.label, true);
            }}
          >
            <div className="story-topic-border" style={{ borderColor: hobby.color }} />
            <div className="story-topic-content">
              {hobby.icon}
            </div>
          </button>
          <p className="story-label">{hobby.label}</p>
        </Grid>

        <Card
          elevation={4}
          className={`story-panel ${cx({
            'is--open': open,
          })}`}
          style={{
            borderColor: hobby.color,
          }}
        >
          {hobby.content}

          <Button
            className="story-close"
            onClick={() => {
              onClick(hobby.label, false);
            }}
          >
            <FormattedMessage id="general.button.close" />
            <Close htmlColor={theme.palette.primary.main} />
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Story;
