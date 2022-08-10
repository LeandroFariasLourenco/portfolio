import { CalendarMonth, LocationOn, School } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useRef } from 'react';

import { FormattedMessage } from 'react-intl';

import { ICardProps } from './props';
import * as S from './styled';

const Extracurricular = ({
  card,
}: ICardProps) => {
  const cardWrapperRef = useRef<HTMLDivElement>();

  return (
    <S.CardWrapper
      item
      container
      flexWrap="nowrap"
      flexDirection="column"
      justifyContent="space-between"
      xs={4}
      ref={(ref) => {
        cardWrapperRef.current = ref as HTMLDivElement;
      }}
    >
      <S.CardTitleContainer
        container
        justifyContent="center"
      >
        <S.CardLogo src={card.logo} />
        <Typography variant="h5" fontSize="20px" textAlign="center"><FormattedMessage id={card.title} /></Typography>
      </S.CardTitleContainer>

      <S.CardContainer>
        <Typography><FormattedMessage id={card.description} /></Typography>
      </S.CardContainer>

      <S.CardContainer>
        <S.CardRow>
          <CalendarMonth htmlColor="white" />
          <Typography>{card.duration}</Typography>
        </S.CardRow>
        <S.CardRow>
          <LocationOn htmlColor="white" />
          <Typography><FormattedMessage id={card.location} /></Typography>
        </S.CardRow>
        <S.CardRow>
          <School htmlColor="white" />
          <Typography><FormattedMessage id={card.type} /></Typography>
        </S.CardRow>

      </S.CardContainer>
    </S.CardWrapper>
  );
};

export default Extracurricular;
