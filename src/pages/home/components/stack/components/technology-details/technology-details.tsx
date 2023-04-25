import cx from 'classnames';
import { useCallback } from 'react';
import { Typography } from '@mui/material';
import { FormattedMessage, useIntl } from 'react-intl';
import * as S from './styled';
import { ITechnologyDetailsProps } from './props.interface';

const TechnologyDetails = ({
  technology,
  isSelected,
}: ITechnologyDetailsProps) => {
  const intl = useIntl();

  const renderTechnologyTopic = useCallback((topic: string) => (
    <S.LanguageTopic
      key={topic}
    >
      <Typography>
        {intl.formatMessage({ id: topic })}
      </Typography>
    </S.LanguageTopic>
  ), [intl]);

  return (
    <S.LanguageDescriptionCard
      className={cx({
        'is--selected': isSelected,
      })}
    >
      <S.LanguageDescriptionContainer>
        <S.LanguageDescription>
          <FormattedMessage id={technology.description} />
        </S.LanguageDescription>

        {technology.topics.length ? (
          <S.LanguageTopics>
            <S.LanguageDividerTitle variant="h4"><FormattedMessage id="home.languages.knowledge" /></S.LanguageDividerTitle>
            {technology.topics.map((topic) => renderTechnologyTopic(topic))}
          </S.LanguageTopics>
        ) : null}
      </S.LanguageDescriptionContainer>
    </S.LanguageDescriptionCard>
  );
};

export default TechnologyDetails;
