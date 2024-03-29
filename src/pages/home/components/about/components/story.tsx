import { Close } from '@mui/icons-material';
import {
  Grid,
  useTheme,
} from '@mui/material';
import cx from 'classnames';
import { FormattedMessage } from 'react-intl';
import { useResponsive } from 'src/core/hooks';
import { EResponsiveType } from 'src/core/models';
import { IStoryProps } from './props.interface';
import * as S from './styled';

const Story = ({
  hobby,
  onClick,
  open,
}: IStoryProps) => {
  const theme = useTheme();
  const isMobile = useResponsive({ breakpoint: 'md', type: EResponsiveType.smaller });

  return (
    <Grid
      xs={isMobile ? 6 : 4}
      item
    >
      <S.AboutMeStoryTopicContainer
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
          <S.AboutMeStoryTopic
            style={{ borderColor: hobby.color }}
            onClick={() => {
              onClick(hobby.label, true);
            }}
          >
            {Array(8).fill(Math.random()).map((_, index) => (
              <S.DashedBorder key={`${hobby.label}-${index}`}><S.Block color={hobby.color} /></S.DashedBorder>
            ))}

            {hobby.icon}

          </S.AboutMeStoryTopic>
          <S.StoryLabel>{hobby.label}</S.StoryLabel>
        </Grid>

        <S.StoryPanel
          elevation={4}
          className={cx({
            'is--open': open,
          })}
          style={{
            borderColor: hobby.color,
          }}
        >
          {hobby.content}

          <S.CloseStory
            onClick={() => {
              onClick(hobby.label, false);
            }}
          >
            <FormattedMessage id="general.button.close" />
            <Close htmlColor={theme.palette.grey['100']} />
          </S.CloseStory>
        </S.StoryPanel>
      </S.AboutMeStoryTopicContainer>
    </Grid>
  );
};

export default Story;
