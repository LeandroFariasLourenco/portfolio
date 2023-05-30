import Responsive from '@/shared/components/responsive/responsive';
import { getBucketResource } from '@/shared/functions';
import { useResponsive } from '@/shared/hooks';
import { EResponsiveType } from '@/shared/models';
import { Grid, useTheme } from '@mui/material';
import cx from 'classnames';
import TechnologyDetails from '../technology-details/technology-details';
import { ITechnologyProps as ITechnologyTabProps } from './props.interface';

import { ArrowUpward } from '@mui/icons-material';
import Image from 'next/image';
import { useStackContext } from '../context/stack.context';
import styles from './technology-tab.module.scss';

const TechnologyTab = ({
  technology,
  onDesktopToggle,
}: ITechnologyTabProps) => {
  const { selected: {
    technologyTab,
    setSelectedTechnologyTab
  } } = useStackContext();
  const isMobile = useResponsive({ type: EResponsiveType.smaller });
  const theme = useTheme();

  return (
    <>
      <Grid
        className={`${styles["technology-container"]} ${cx({
          [styles.selected]: technology.name == technologyTab,
        })}`}
        onClick={() => {
          if (!isMobile) {
            onDesktopToggle(technology);
            return;
          }

          setSelectedTechnologyTab(technologyTab === technology.name ? '' : technology.name);
        }}
        container
        alignItems="center"
      >
        <Grid className={styles["technology-tab-wrapper"]} container flexWrap="nowrap" alignItems="center">
          <div className={styles["technology-image"]}>
            <Image
              src={getBucketResource(technology.icon)}
              width={35}
              height={35}
              alt={technology.name}
              quality={55}
            />
          </div>
          {/* <h5 sx={{ color: isOpen ? 'white' : '' }}> */}
          <h5 className={styles["technology-title"]}>{technology.name}</h5>
          <Responsive
            breakpoint="md"
            belowComponent={(
              <ArrowUpward
                className={`${styles["technology-mobile-arrow"]} ${cx({ [styles['is--open']]: technology.name === technologyTab })}`}
                htmlColor={theme.typography.h5.color}
              />
            )}
          />
        </Grid>
      </Grid>
      <Responsive
        breakpoint="md"
        belowComponent={(
          <TechnologyDetails technology={technology} />
        )}
      />
    </>
  );
};

export default TechnologyTab;
