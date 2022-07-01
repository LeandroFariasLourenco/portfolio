import { useEffect, useRef } from 'react';
import { Grid } from '@mui/material';

/* @ts-ignore */
import NET from 'vanta/dist/vanta.net.min';

import { Typewriter } from 'src/core/components';
import { Section, Background } from 'src/core/layouts';
import * as S from './styled';

const Welcome = () => {
  const backgroundRef = useRef<any>();

  useEffect(() => {
    NET({
      el: backgroundRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      scale: 1,
      scaleMobile: 1,
      color: 0x00FF87,
      backgroundColor: 0x0E1122,
      showDots: true,
      points: 20,
    });
  }, []);

  return (
    <Grid>
      <Background
        ref={backgroundRef}
      />
      <Grid
        item
        xs={12}
        container
        justifyContent="center"
      >
        <S.Wrapper container alignItems="center" item justifyContent="center" xs={12}>
          <Grid container xs={6} item>
            <Grid item xs={8}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString('Olá, eu s')
                    .deleteChars(4)
                    .typeString('sou o Leon')
                    .deleteChars(2)
                    .typeString('andro Farias!')
                    .start();
                }}
              />
              {/* <Typography variant="h2">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.pauseFor(5500)
                    .typeString('Sou um desenvolvedor')
                    .typeString(' e quero contar')
                    .typeString(' para você')
                    .typeString(' um pouco sobre')
                    .typeString(' mim e minha trajetória.')
                    .start();
                }}
              />
            </Typography> */}
            </Grid>
            <Grid item xs={4}>
              <S.ProfileImage src="https://www.github.com/LeandroFariasLourenco.png?size=200" />
            </Grid>
          </Grid>
        </S.Wrapper>
      </Grid>
    </Grid>
  );
};

export default Welcome;
