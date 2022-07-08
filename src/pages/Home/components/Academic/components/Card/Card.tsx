import { CalendarMonth, Close, PanoramaFishEye } from '@mui/icons-material';
import { Button, Drawer, Typography } from '@mui/material';
import { useRef, useState } from 'react';

import { FormattedMessage } from 'react-intl';

import { ICardProps } from './props';
import * as S from './styled';

const Card = ({
  card,
}: ICardProps) => {
  const [viewingMore, setViewingMore] = useState(false);
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
      <S.CardContainer>
        <S.CardLogo src={card.logo} />
        <Typography variant="h5"><FormattedMessage id={card.title} /></Typography>
      </S.CardContainer>
      <S.CardContainer>
        <S.CardRow>
          <CalendarMonth htmlColor="white" />
          <Typography>{card.duration}</Typography>
        </S.CardRow>
        <S.CardRow>
          <CalendarMonth htmlColor="white" />
          <Typography><FormattedMessage id={card.location} /></Typography>
        </S.CardRow>
        <S.CardRow>
          <CalendarMonth htmlColor="white" />
          <Typography><FormattedMessage id={card.type} /></Typography>
        </S.CardRow>

      </S.CardContainer>

      <S.CardContainer>
        {/* <Button
          onClick={() => {
            setViewingMore(true);
          }}
        >
          <PanoramaFishEye />
          Abre su dae
        </Button> */}
      </S.CardContainer>

      <Drawer
        open={viewingMore}
        anchor="bottom"
        hideBackdrop
        container={cardWrapperRef.current}
        onClose={() => {
          setViewingMore(false);
        }}
      >
        {/* <Button
          color="secondary"
          onClick={() => {
            setViewingMore(false);
          }}
        >
          <Close />
        </Button> */}
      </Drawer>
    </S.CardWrapper>
  );
};

export default Card;
