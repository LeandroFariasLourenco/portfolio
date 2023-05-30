import cx from 'classnames';
import { useCallback } from 'react';
import { Typography } from '@mui/material';
import { FormattedMessage, useIntl } from 'react-intl';
import { ITechnologyDetailsProps } from './props.interface';

import styles from './technology-details.module.scss';
import { useStackContext } from '../context/stack.context';

const TechnologyDetails = ({
  technology,
}: ITechnologyDetailsProps) => {
  const { selected: {
    technologyTab,
  } } = useStackContext();
  const intl = useIntl();

  const renderTechnologyTopic = useCallback((topic: string) => (
    <li
      className={styles["technology-details-language-topic"]}
      key={topic}
    >
      <Typography>
        {intl.formatMessage({ id: topic })}
      </Typography>
    </li>
  ), [intl]);

  return (
    <div
      className={`${styles["technology-details-description-card"]} ${cx({
        [styles['is--selected']]: technology.name === technologyTab,
      })}`}
    >
      <div className={styles["technology-details-description-container"]}>
        <p className={styles["technology-details-language-description"]}><FormattedMessage id={technology.description} /></p>

        {technology.topics.length ? (
          <ul className={styles["technology-details-language-topics"]}>
            <h4 className={styles["technology-details-language-divider"]}><FormattedMessage id="home.languages.knowledge" /></h4>
            {technology.topics.map((topic) => renderTechnologyTopic(topic))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default TechnologyDetails;
