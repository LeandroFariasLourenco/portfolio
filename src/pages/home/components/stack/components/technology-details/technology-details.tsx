import cx from 'classnames';
import { useCallback } from 'react';
import { Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import * as S from './styled';
import { ITechnologyDetailsProps } from './props.interface';

const TechnologyDetails = ({
  technology,
  isSelected,
}: ITechnologyDetailsProps) => {
  const renderTechnologyTopic = useCallback((topic: string) => (
    <S.LanguageTopic
      key={topic}
    >
      <Typography>
        {topic}
      </Typography>
    </S.LanguageTopic>
  ), []);

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
            <S.LanguageDividerTitle variant="h4"><FormattedMessage id="home.languages.concepts" /></S.LanguageDividerTitle>
            {technology.topics.map((topic) => renderTechnologyTopic(topic))}
          </S.LanguageTopics>
        ) : null}
      </S.LanguageDescriptionContainer>
    </S.LanguageDescriptionCard>
  );
};

export default TechnologyDetails;
