import {
  Grid,
} from '@mui/material';
import {
  useState,
  useCallback,
} from 'react';
import Responsive from '@/shared/components/responsive/responsive';
import TechnologyDetails from '../technology-details/technology-details';
import TechnologyTab from '../technology-tab/technology-tab';
import { ITechnologiesProps } from './props.interface';
import { ITechnology } from './models/technology.interface';

import styles from './technologies.module.scss';

const Technologies = ({
  technologies,
}: ITechnologiesProps) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const renderTechnology = useCallback((technology: ITechnology, index: number) => (
    <TechnologyTab
      index={index}
      key={technology.description}
      technology={technology}
      onDesktopToggle={(index) => setSelectedTab(index)}
      selectedTab={selectedTab}
    />
  ), [selectedTab]);

  return (
    <Grid className={styles["languages-container"]} container flexWrap="nowrap">
      <Grid className={styles["languages-tab-wrapper"]} container flexDirection="column" flexWrap="nowrap" item xs={12} md={4}>
        {technologies.map(renderTechnology)}
      </Grid>
      <Responsive
        breakpoint="md"
      >
        <Grid item xs={8}>
          <TechnologyDetails
            technology={technologies[selectedTab]}
          />
        </Grid>
      </Responsive>
    </Grid>
  );
};

export default Technologies;
