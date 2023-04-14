import { CalendarMonth, LocationOn, School } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useRef } from 'react';

import { FormattedMessage } from 'react-intl';

import { ICourseProps } from './props.interface';
import * as S from './styled';

const Course = ({
  course: card,
  index,
}: ICourseProps) => {
  const cardWrapperRef = useRef<HTMLDivElement>();

  return (
    <S.CourseWrapper
      item
      container
      flexWrap="nowrap"
      flexDirection="column"
      justifyContent="space-between"
      xs={12}
      ref={(ref) => {
        cardWrapperRef.current = ref as HTMLDivElement;
      }}
      style={{
        animationDuration: `${300 + 100 * index}ms`,
      }}
    >
      <S.CourseTitleContainer
        container
        justifyContent="center"
      >
        <S.CourseLogo src={card.logo} />
        <Typography variant="h5" fontSize="20px" textAlign="center"><FormattedMessage id={card.title} /></Typography>
      </S.CourseTitleContainer>

      <S.CourseContainer>
        {card.description}
      </S.CourseContainer>

      <S.CourseContainer>
        <S.CourseRow>
          <CalendarMonth htmlColor="white" />
          <Typography>{card.duration}</Typography>
        </S.CourseRow>
        <S.CourseRow>
          <LocationOn htmlColor="white" />
          <Typography><FormattedMessage id={card.location} /></Typography>
        </S.CourseRow>
        <S.CourseRow>
          <School htmlColor="white" />
          <Typography><FormattedMessage id={card.type} /></Typography>
        </S.CourseRow>

      </S.CourseContainer>
    </S.CourseWrapper>
  );
};

export default Course;
