import { useMemo, useState } from 'react';
import {
  Box,
  Grid, Tab, Tabs, Typography,
} from '@mui/material';

import AngularIcon from 'src/assets/logos/angular.png';
import ReactIcon from 'src/assets/logos/react.png';
import JqueryIcon from 'src/assets/logos/jquery.png';

import * as S from './styled';

const Typescript = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const frameworks = useMemo(() => [
    {
      name: 'React',
      icon: <img src={ReactIcon} width={40} alt="react" />,
    },
    {
      name: 'React Native',
      icon: <img src={ReactIcon} width={40} alt="react native" />,
    },
    {
      name: 'Angular',
      icon: <img src={AngularIcon} width={35} alt="angular" />,
    },
    {
      name: 'JQuery',
      icon: <img src={JqueryIcon} width={35} alt="Jquery" />,
    },
  ], []);

  return (
    <Grid container flexWrap="nowrap" style={{ marginTop: 30 }}>
      <Grid item xs={4} sx={{ marginRight: 5 }}>
        <Tabs
          value={selectedTab}
          orientation="vertical"
          indicatorColor="secondary"
        >
          {frameworks.map((framework, index) => (
            <S.TabContainer
              selected={index === selectedTab}
              onClick={() => {
                setSelectedTab(index);
              }}
              key={framework.name}
            >
              <Tab
                sx={{ opacity: 1 }}
                label={(
                  <Grid container flexWrap="nowrap" alignItems="center">
                    <Box style={{ width: 75, marginRight: 10 }}>
                      {framework.icon}
                    </Box>
                    <Typography variant="body2" sx={{ color: index === selectedTab ? 'white' : '' }}>
                      {framework.name}
                    </Typography>
                  </Grid>
                )}
              />
            </S.TabContainer>
          ))}
        </Tabs>
      </Grid>
      <Grid item xs={6}>
        Teste
      </Grid>
    </Grid>
  );
};

export default Typescript;
