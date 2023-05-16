import { getBucketResource } from '@/shared/functions';
import cx from 'classnames';
import { ILanguageProps } from './props.interface';

import { Grid } from '@mui/material';
import Image from 'next/image';
import { useStackContext } from '../context/stack.context';
import styles from './language-tab.module.scss';

const LanguageTab = ({
  language,
  onToggle,
}: ILanguageProps) => {
  const { selected: { setLanguageTab, languageTab } } = useStackContext();

  return (
    <Grid
      key={language.name}
      container
      alignItems="center"
      justifyContent="center"
      flex={1}
      onClick={() => {
        onToggle(language.name);
      }}
      className={`${styles["language-tab-container"]}`}
    >
      <div className={`tab-button ${cx({ open: language.name === languageTab })}`}>
        <Image
          className={styles["language-tab-logo"]}
          src={getBucketResource(language.icon)}
          alt={language.name}
          width={130}
          height={65}
        />
      </div>
    </Grid >
  );
};

export default LanguageTab;
