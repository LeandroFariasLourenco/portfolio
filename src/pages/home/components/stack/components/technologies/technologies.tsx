import {
  Grid,
} from '@mui/material';
import {
  useState,
  useCallback,
} from 'react';
import Responsive from 'src/core/components/responsive/responsive';
import TechnologyDetails from '../technology-details/technology-details';
import TechnologyTab from '../technology-tab/technology-tab';
import { ITechnologiesProps } from './props.interface';
import * as S from './styled';
import { ITechnology } from './models/technology.interface';

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
    <S.LanguageContainer container flexWrap="nowrap">
      <S.LanguagesTabWrapper container flexDirection="column" flexWrap="nowrap" item xs={12} md={4}>
        {technologies.map(renderTechnology)}
      </S.LanguagesTabWrapper>
      <Responsive
        breakpoint="md"
      >
        <Grid item xs={8}>
          <TechnologyDetails
            technology={technologies[selectedTab]}
          />
        </Grid>
      </Responsive>
    </S.LanguageContainer>
  );
};

export default Technologies;
