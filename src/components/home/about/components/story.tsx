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

  const renderDashedBorder = useCallback((_: IHobbie, index: number) => (
    <div className="story-dashed-border" key={`${hobby.label}-${index}`}><span className="story-block" style={{ borderColor: hobby.color }} /></div>
  ), [])

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
          <Button
            className="story-topic"
            style={{ borderColor: hobby.color }}
            onClick={() => {
              onClick(hobby.label, true);
            }}
          >
            {Array(8).fill(Math.random()).map(renderDashedBorder)}

            {hobby.icon}

          </Button>
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
            <Close htmlColor={theme.palette.grey['100']} />
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Story;
