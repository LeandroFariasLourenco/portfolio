import { Grid } from '@mui/material';

import { Typewriter } from 'src/core/components';
import Particles from 'react-tsparticles';
import * as S from './styled';
import { particlesConfig } from './particles-config';

const Welcome = () => (
  <S.Wrapper container alignItems="center" item justifyContent="center" xs={12}>
    <Particles
      id="welcome-background"
      canvasClassName="background-canvas"
      options={particlesConfig}
    />
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
);

export default Welcome;
