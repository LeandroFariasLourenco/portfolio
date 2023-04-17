import { CalendarMonth, ExitToApp } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { memo } from 'react';
import { TECHNOLOGY_ICONS } from 'src/assets/resources/technology-icons';
import Responsive from 'src/core/components/responsive/responsive';
import { useResponsive } from 'src/core/hooks';
import { IRepositoryProps } from './props.interface';
import * as S from './styled';

const Repository = ({
  repository,
}: IRepositoryProps) => {
  const isDesktop = useResponsive({});

  const getRepositoryLanguageIcon = (language: string) => {
    switch (language?.toLowerCase()) {
      case 'javascript':
        return TECHNOLOGY_ICONS.JAVASCRIPT;
      case 'typescript':
        return TECHNOLOGY_ICONS.TYPESCRIPT;
      case 'python':
        return TECHNOLOGY_ICONS.PYTHON;
      case 'dart':
        return TECHNOLOGY_ICONS.DART;
      case 'css':
        return TECHNOLOGY_ICONS.CSS;
      case 'c#':
        return TECHNOLOGY_ICONS.CSHARP;
      case 'html':
        return TECHNOLOGY_ICONS.HTML;
      case 'java':
        return TECHNOLOGY_ICONS.JAVA;
      case 'ejs':
        return TECHNOLOGY_ICONS.EJS;
      case 'swift':
        return TECHNOLOGY_ICONS.SWIFT;
      default:
        return TECHNOLOGY_ICONS.NOT_FOUND;
    }
  };

  return (
    <S.RepositoryContainer
      target={isDesktop ? '_blank' : '_self'}
      href={repository.html_url}
    >
      <S.RepositoryRow>
        <S.RepositoryId>
          #
          {repository.id}
        </S.RepositoryId>
        <S.RepositorySize>
          {(repository.size / 100).toFixed(2)}
          mb
        </S.RepositorySize>
      </S.RepositoryRow>

      <S.RepositoryRow>
        <S.RepositoryTitle>{repository.name}</S.RepositoryTitle>
        <Responsive
          breakpoint="md"
        >
          <ExitToApp htmlColor="white" fontSize="small" />
        </Responsive>
      </S.RepositoryRow>

      <S.RepositoryRow>
        <S.RepositoryRow>
          <Responsive
            breakpoint="md"
          >
            <CalendarMonth htmlColor="white" fontSize="small" />
          </Responsive>
          <Typography variant="caption">{new Date(repository.created_at).toLocaleDateString()}</Typography>
        </S.RepositoryRow>

        <S.RepositoryRow>
          <S.RepositoryLanguageIcon src={getRepositoryLanguageIcon(repository.language)} />
        </S.RepositoryRow>
      </S.RepositoryRow>
    </S.RepositoryContainer>
  );
};

export default memo(Repository, (prev, next) => (
  prev.repository.id === next.repository.id
));
