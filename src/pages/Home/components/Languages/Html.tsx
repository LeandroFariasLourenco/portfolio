import { useMemo, useState } from 'react';
import { Tab, Tabs } from '@mui/material';

import AngularIcon from 'src/assets/logos/angular.png';
import ReactIcon from 'src/assets/logos/react.png';

const Html = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const frameworks = useMemo(() => [
    {
      name: 'React',
      icon: <img src={ReactIcon} width={75} alt="react" />,
    },
    {
      name: 'Angular',
      icon: <img src={AngularIcon} width={75} alt="react" />,
    },
  ], []);

  return (
    <Tabs>
      {frameworks.map((framework) => (
        <Tab
          key={framework.name}
          label={framework.icon}
        />
      ))}
    </Tabs>
  );
};

export default Html;
