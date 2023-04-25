import { useEffect, useCallback } from 'react';
import { useIntl } from 'react-intl';
import Lottie from 'react-lottie';
import RobotAnimation from 'src/assets/animations/robot.json';
import { Grid, useTheme } from '@mui/material';
import { LanguageSelect } from 'src/core/components';
import { useResponsive } from 'src/core/hooks';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'src/core/constants';
import * as S from './styled';

const NotAvailable = () => {
  const intl = useIntl();
  const isDesktop = useResponsive({});
  const navigate = useNavigate();
  const { breakpoints } = useTheme();

  const handleWindowResize = useCallback((window: Window) => {
    if (window.innerWidth >= breakpoints.values.lg || window.innerWidth <= breakpoints.values.sm) {
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
    window.addEventListener('resize', ({ currentTarget }) => {
      handleWindowResize(currentTarget as Window);
    });

    window.addEventListener('orientationchange', (window) => {
      handleOrientationChange(window as unknown as Window);
    });

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
              width={isDesktop ? 300 : 200}
              height={isDesktop ? 200 : 100}
              style={{ marginRight: -40 }}
              speed={0.25}
              options={{
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
