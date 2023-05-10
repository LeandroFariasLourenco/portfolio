import cx from 'classnames';
import { useEffect, useState } from 'react';
import { getBucketResource } from '@/shared/functions';
import { ILanguageProps } from './props.interface';

import './language-tab.scss';
import { Grid } from '@mui/material';

const LanguageTab = ({
  language,
  onToggle,
  index,
  selectedTab,
}: ILanguageProps) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(selectedTab === index);
  }, [selectedTab]);

  return (
    <Grid
      key={language.name}
      container
      alignItems="center"
      justifyContent="center"
      flex={1}
      onClick={() => {
        onToggle(index);
      }}
      className={`language-tab-container ${cx({ open })}`}
    >
      <img
        className="language-tab-logo"
        src={getBucketResource(language.icon)}
        alt={language.name}
      />
    </Grid>
  );
};

export default LanguageTab;
