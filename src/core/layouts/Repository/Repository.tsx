import { AccountTree, CalendarMonth, ExitToApp } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { memo } from 'react';
import Responsive from 'src/core/components/responsive/responsive';
import { IRepositoryProps } from './props';
import * as S from './styled';

const Repository = ({
  repository,
}: IRepositoryProps) => {
  const getRepositoryLanguageIcon = (language: string) => {
    switch (language?.toLowerCase()) {
      case 'javascript':
        return 'https://img.icons8.com/color/48/000000/javascript.png';
      case 'typescript':
        return 'https://img.icons8.com/color/48/000000/typescript.png';
      case 'python':
        return 'https://img.icons8.com/color/48/000000/python.png';
      case 'dart':
        return 'https://img.icons8.com/color/48/000000/dart.png';
      case 'css':
        return 'https://img.icons8.com/color/48/000000/css3.png';
      case 'c#':
        return 'https://img.icons8.com/color/344/c-sharp-logo.png';
      case 'html':
        return 'https://img.icons8.com/color/48/000000/html-5.png';
      case 'java':
        return 'https://img.icons8.com/color/48/000000/java.png';
      case 'ejs':
        return 'https://img.icons8.com/fluency/344/node-js.png';
      default:
        return 'https://img.icons8.com/fluency-systems-regular/344/page-not-found.png';
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
