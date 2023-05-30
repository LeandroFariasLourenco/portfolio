'use client'

import { Lottie } from '@alfonmga/react-lottie-light-ts';
import { Card, Grid, useTheme } from '@mui/material';
import { useCallback, useEffect } from 'react';
import { useIntl } from 'react-intl';
import RobotAnimation from '@/../public/animations/robot.json';

import styles from './not-available.module.scss';
import { useRouter } from 'next/router';
import { LanguageSelect } from '@/shared/components';
import { ROUTES } from '@/shared/constants/routes';

const NotAvailable = () => {
  const intl = useIntl();
  const router = useRouter();
  const { breakpoints } = useTheme();

  const handleWindowResize = useCallback(({ target }: any) => {
    if (target.innerWidth >= breakpoints.values.lg || target.innerWidth <= breakpoints.values.sm) {
      router.push(ROUTES.home);
      return;
    }

    router.push(`/${ROUTES.notAvailable}`);
  }, []);

  const handleOrientationChange = useCallback((window: Window) => {
    const orientation = window.screen ? window.screen.orientation.type : '';

    switch (orientation) {
      case 'landscape-primary':
      case 'landscape-secondary':
        router.push(ROUTES.notAvailable);
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
    <div className={styles["not-available-wrapper"]}>
      <Card className={styles["not-available-card"]}>
        <Grid container item xs={12} justifyContent="space-between">
          <h2 className={styles["not-available-title"]}>Oops!</h2>
          <LanguageSelect />
        </Grid>
        <Grid className={styles["not-available-text-container"]}>
          <Grid item flex={1}>
            <p className={styles["not-available-text"]}>{intl.formatMessage({ id: 'not-available.text' })}</p>
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
        </Grid>
      </Card>
    </div>
  );
};

export default NotAvailable;