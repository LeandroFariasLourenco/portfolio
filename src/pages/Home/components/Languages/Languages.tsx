import { DeveloperMode } from '@mui/icons-material';
import { Tab, Tabs, useTheme } from '@mui/material';
import { useMemo, useState } from 'react';
import { Section } from 'src/core/layouts';
import { Typewriter } from 'src/core/components';

import CssHtmlIcon from 'src/assets/logos/css-html.png';
import TypescriptJavascriptIcon from 'src/assets/logos/typescript-javascript.png';
import DartIcon from 'src/assets/logos/dart.png';
import AWSIcon from 'src/assets/logos/aws.png';

import Typescript from './Typescript';
import Html from './Html';
import Dart from './Dart';
import Aws from './Aws';

const Languages = () => {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const languageTabs = useMemo(() => [
    {
      icon: <img src={TypescriptJavascriptIcon} width={100} alt="ts/js" />,
      name: 'Typescript/Javascript',
      content: <Typescript />,
    },
    {
      icon: <img src={CssHtmlIcon} width={90} alt="ts/js" />,
      name: 'HTML/CSS',
      content: <Html />,
    },
    {
      icon: <img src={DartIcon} width={100} alt="ts/js" />,
      name: 'Dart',
      content: <Dart />,
    },
    {
      icon: <img src={AWSIcon} width={100} alt="aws" />,
      name: 'AWS',
      content: <Aws />,
    },
  ], []);

  return (
    <Section
      title={(
        <>
          <Typewriter onInit={(typewriter) => {
            typewriter.typeString('Minha stack')
              .start();
          }}
          />
          <DeveloperMode fontSize="large" htmlColor="white" />
        </>
      )}
      gridProps={{
        sx: {
          backgroundColor: theme.palette.background.paper,
          padding: 5,
        },
      }}
    >
      <Tabs
        value={selectedTab}
        variant="fullWidth"
        indicatorColor="primary"
        onChange={(_, value) => setSelectedTab(value)}
      >
        {languageTabs.map((language) => (
          <Tab
            key={language.name}
            label={language.icon}
          />
        ))}
      </Tabs>
      {languageTabs.map((language, index) => {
        if (selectedTab !== index) {
          return null;
        }
        return language.content;
      })}
    </Section>
  );
};

export default Languages;
