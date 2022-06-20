import { useState } from 'react';
import { Timeline } from '@mui/icons-material';
import { Section } from 'src/core/layouts';

import landmarks from 'src/assets/resources/landmarks.json';

import { Typography } from '@mui/material';
import * as S from './styled';

const MyTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section
      onTitleShow={(typewriter) => {
        typewriter.typeString('Minha linha do tempo')
          .start();
      }}
      icon={<Timeline fontSize="large" htmlColor="white" />}
    >
      <S.TimelineWrapper>
        <S.TimelineBar container alignItems="center" flexDirection="row" gap={5}>
          {landmarks.map((year, index) => (
            <S.TimelineYear
              key={(Object.getOwnPropertyNames(year)! as unknown as string)}
              $active={index <= activeIndex}
              $trailHighlighted={index < activeIndex}
              $index={index}
              flex={1}
              container
              justifyContent="center"
              alignItems="center"
              onClick={() => {
                setActiveIndex(index);
              }}
            >
              <Typography variant="h4">
                {Object.getOwnPropertyNames(year)}
              </Typography>

              <S.TimelineCard
                $index={index}
                $active={index <= activeIndex}
              >
                Teste
              </S.TimelineCard>
            </S.TimelineYear>
          ))}
        </S.TimelineBar>
      </S.TimelineWrapper>
    </Section>
  );
};

export default MyTimeline;
