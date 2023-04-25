import { Lottie } from '@alfonmga/react-lottie-light-ts';
import { Grid, useTheme } from '@mui/material';
import { useCallback, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import RobotAnimation from 'src/assets/animations/robot.json';
import { LanguageSelect } from 'src/core/components';
import { ROUTES } from 'src/core/constants';
import * as S from './styled';

const NotAvailable = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const { breakpoints } = useTheme();

  const handleWindowResize = useCallback(({ target }: any) => {
    if (target.innerWidth >= breakpoints.values.lg || target.innerWidth <= breakpoints.values.sm) {
      navigate(ROUTES.home);
      return;
    }

    navigate(`/${ROUTES.notAvailable}`);
  }, []);

  const handleOrientationChange = useCallback((window: Window) => {
    const orientation = window.screen ? window.screen.orientation.type : '';

    switch (orientation) {
      case 'landscape-primary':
      case 'landscape-secondary':
        navigate(ROUTES.notAvailable);
        break;
      default:
        handleWindowResize(window);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize as any);
    window.addEventListener('orientationchange', handleOrientationChange as any);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange as any);
      window.removeEventListener('resize', handleWindowResize as any);
    };
  }, []);

  return (
    <S.NotAvailableWrapper>
      <S.NotAvailableCard>
        <Grid container item xs={12} justifyContent="space-between">
          <S.NotAvailableTitle variant="h2">Oops!</S.NotAvailableTitle>
          <LanguageSelect />
        </Grid>
        <S.NotAvailableTextContainer>
          <Grid item flex={1}>
            <S.NotAvailableText>{intl.formatMessage({ id: 'not-available.text' })}</S.NotAvailableText>
          </Grid>
          <Grid item>
            <Lottie
              width="300px"
              height="200px"
              style={{ marginRight: '-40px' }}
              speed={0.25}
              config={{
                animationData: RobotAnimation,
              }}
            />
          </Grid>
        </S.NotAvailableTextContainer>
      </S.NotAvailableCard>
    </S.NotAvailableWrapper>
  );
};

export default NotAvailable;
