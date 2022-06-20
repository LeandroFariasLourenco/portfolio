import { DeveloperMode } from '@mui/icons-material';
import { Box, useTheme } from '@mui/material';
import { useState } from 'react';
import { Section } from 'src/core/layouts';
import { APP } from 'src/core/constants';
import languages from 'src/assets/resources/languages..json';
import Technology from 'src/core/layouts/Technology/Technology';

import * as S from './styled';

const Languages = () => {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState<number>(0);

  // const languageTabs = useMemo(() => [
  //   {
  //     icon: <img src={`${APP.aws.assets}/javascript-typescript.svg`} width={110} alt="ts/js" />,
  //     name: 'Typescript/Javascript',
  //     content: <Typescript />,
  //   },
  //   {
  //     icon: <img src={`${APP.aws.assets}/html-css.svg`}
  //      style={{ marginTop: '-15px' }} width={110} alt="ts/js" />,
  //     name: 'HTML/CSS',
  //     content: null,
  //   },
  //   {
  //     icon: <img src={`${APP.aws.assets}/dart.svg`} width={55} alt="ts/js" />,
  //     name: 'Dart',
  //     content: null,
  //   },
  //   {
  //     icon: <img src={`${APP.aws.assets}/aws.svg`} width={90} alt="aws" />,
  //     name: 'AWS',
  //     content: null,
  //   },
  // ], []);

  return (
    <Section
      onTitleShow={(typewriter) => {
        typewriter.typeString('Minha stack')
          .start();
      }}
      icon={<DeveloperMode fontSize="large" htmlColor="white" />}
      gridStyle={{
        backgroundColor: theme.palette.background.paper,
        padding: 5,
      }}
    >
      <S.TabWrapper container>
        {languages.map((language, index) => (
          <S.TabContainer
            key={language.name}
            selected={selectedTab === index}
            container
            alignItems="center"
            justifyContent="center"
            flex={1}
            onClick={() => {
              setSelectedTab(index);
            }}
          >
            <img
              src={`${APP.aws.assets}${language.icon}`}
              width={130}
              style={{ maxHeight: 65 }}
              alt={language.name}
            />
          </S.TabContainer>
        ))}
      </S.TabWrapper>
      {languages.map(({ name, technologies }, index) => (
        <Box
          key={`${name}-tecnologies`}
          sx={{
            display: selectedTab === index ? 'flex' : 'none',
          }}
        >
          <Technology
            technologies={technologies}
          />
        </Box>
      ))}
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
