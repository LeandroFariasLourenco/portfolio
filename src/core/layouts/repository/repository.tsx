import { AccountTree, CalendarMonth, ExitToApp } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { memo } from 'react';
import Responsive from 'src/core/components/responsive/responsive';
import { getBucketResource } from 'src/core/functions';
import { IRepositoryProps } from './props';
import * as S from './styled';

const Repository = ({
  repository,
}: IRepositoryProps) => {
  const getRepositoryLanguageIcon = (language: string) => {
    switch (language?.toLowerCase()) {
      case 'javascript':
        return getBucketResource('/technologies/javascript.png');
      case 'typescript':
        return getBucketResource('/technologies/typescript.png');
      case 'python':
        return getBucketResource('/technologies/python.png');
      case 'dart':
        return getBucketResource('/technologies/dart.png');
      case 'css':
        return getBucketResource('/technologies/css3.png');
      case 'c#':
        return getBucketResource('/technologies/c-sharp-logo.png');
      case 'html':
        return getBucketResource('/technologies/html-5.png');
      case 'java':
        return getBucketResource('/technologies/java.png');
      case 'ejs':
        return getBucketResource('/technologies/node-js.png');
      default:
        return getBucketResource('/technologies/page-not-found.png');
    }
  };

  return (
    <S.RepositoryContainer
      target="_blank"
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
