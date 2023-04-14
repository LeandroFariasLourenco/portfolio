import {
  Grid,
} from '@mui/material';
import {
  useState,
} from 'react';
import Responsive from 'src/core/components/responsive/responsive';
import TechnologyDetails from '../technology-details/technology-details';
import TechnologyTab from '../technology-tab/technology-tab';
import { ITechnologiesProps } from './props.interface';
import * as S from './styled';

const Technologies = ({
  technologies,
}: ITechnologiesProps) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <S.LanguageContainer container flexWrap="nowrap">
      <S.LanguagesTabWrapper container flexDirection="column" flexWrap="nowrap" item xs={12} md={4}>
        {technologies.map((technology, index) => (
          <TechnologyTab
            index={index}
            key={technology.description}
            technology={technology}
            onDesktopToggle={(index) => setSelectedTab(index)}
            selectedTab={selectedTab}
          />
        ))}
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
