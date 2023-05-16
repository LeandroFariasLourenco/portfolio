import { useEffect, useState } from 'react';
import cx from 'classnames';
import Responsive from '@/shared/components/responsive/responsive';
import { EResponsiveType } from '@/shared/models';
import { useResponsive } from '@/shared/hooks';
import { getBucketResource } from '@/shared/functions';
import { Grid, useTheme } from '@mui/material';
import TechnologyDetails from '../technology-details/technology-details';
import { ITechnologyProps as ITechnologyTabProps } from './props.interface';

import styles from './technology-tab.module.scss';
import { ArrowUpward } from '@mui/icons-material';

const TechnologyTab = ({
  technology,
  index,
  onDesktopToggle,
  selectedTab,
}: ITechnologyTabProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const isMobile = useResponsive({ type: EResponsiveType.smaller });
  const theme = useTheme();

  useEffect(() => {
    if (isMobile) return;
    setOpen(selectedTab === index);
  }, [selectedTab]);

  return (
    <>
      <Grid
        className={`${styles["technology-container"]} ${cx({
          [styles.selected]: isOpen,
        })}`}
        onClick={() => {
          if (!isMobile) {
            onDesktopToggle(index);
            return;
          }
          setOpen((prevState) => !prevState);
        }}
        container
        alignItems="center"
      >
        <Grid className={styles["technology-tab-wrapper"]} container flexWrap="nowrap" alignItems="center">
          <div className={styles["technology-image"]}>
            <img
              src={getBucketResource(technology.icon)}
              width={35}
              alt={technology.name}
            />
          </div>
          {/* <h5 sx={{ color: isOpen ? 'white' : '' }}> */}
          <h5 className={styles["technology-title"]}>{technology.name}</h5>
          <Responsive
            breakpoint="md"
            belowComponent={(
              <ArrowUpward
                className={styles["technology-mobile-arrow"]}
                // $selected={isOpen}
                htmlColor={theme.typography.h5.color}
              />
            )}
          />
        </Grid>
      </Grid>
      <Responsive
        breakpoint="md"
        belowComponent={(
          <TechnologyDetails technology={technology} isSelected={isOpen} />
        )}
      />
    </>
  );
};

export default TechnologyTab;
