import { DeveloperMode } from '@mui/icons-material';
import cx from 'classnames';
import { useState } from 'react';

import { Section } from 'src/core/layouts';
import { APP } from 'src/core/constants';
import languages from 'src/assets/resources/languages..json';
import Technology from 'src/core/layouts/Technology/Technology';
import * as S from './styled';

const Languages = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <Section
      onTitleShow={(typewriter) => {
        typewriter.typeString('Minha stack')
          .start();
      }}
      icon={<DeveloperMode fontSize="large" htmlColor="white" />}
      gridStyle={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(https://www.teahub.io/photos/full/296-2965452_5-ferramentas-em-alta-para-desenvolvedores-react-desenvolvedor.png)',
        paddingTop: 50,
        paddingBottom: 50,
      }}
    >
      <S.StackWrapper container>
        {languages.map((language, index) => (
          <S.TabContainer
            key={language.name}
            container
            alignItems="center"
            justifyContent="center"
            flex={1}
            onClick={() => {
              setSelectedTab(index);
            }}
            className={cx({ selected: selectedTab === index })}
          >
            <S.StackLogo
              src={`${APP.aws.assets}${language.icon}`}
              alt={language.name}
            />
          </S.TabContainer>
        ))}
      </S.StackWrapper>
      <S.TechnologyWrapper>
        {languages.map(({ name, technologies }, index) => (
          <S.TechnologyTabContainer
            key={`${name}-tecnologies`}
            className={cx({
              selected: selectedTab === index,
            })}
          >
            <Technology
              technologies={technologies}
            />
          </S.TechnologyTabContainer>
        ))}
      </S.TechnologyWrapper>
      {/* {languageTabs.map((language, index) => {
        if (selectedTab !== index) {
          return null;
        }
        return language.content;
      })} */}
    </Section>
  );
};

export default Languages;