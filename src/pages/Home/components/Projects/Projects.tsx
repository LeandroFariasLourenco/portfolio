import { Code, DeveloperBoard } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Repository, Section } from 'src/core/layouts';
import { IGithubRepository } from 'src/core/models';
import { GithubService } from 'src/core/services';

import * as S from './styled';

const Projects = () => {
  const [repositories, setRepositories] = useState<IGithubRepository[]>([]);

  const fetchRepositories = async () => {
    // if (repositories.length) {
    //   return;
    // }

    const response = await GithubService.getRepositories();
    setRepositories(response.sort((current, next) => {
      const currentDate = new Date(current.created_at);
      const nextDate = new Date(next.created_at);

      return nextDate.getTime() - currentDate.getTime();
    }));
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return (
    <Section
      onTitleShow={(typewriter) => {
        typewriter.typeString('Meus projetos')
          .start();
      }}
      icon={<DeveloperBoard htmlColor="white" fontSize="large" />}
      gridStyle={{
        backgroundImage: 'linear-gradient(rgba(28, 22, 48,1), rgba(28, 22, 48,0.96)), url(https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687289/retina_1708x683_op-Ten-Front-End-Design-Rules-For-Developers_Luke-Newsletter-d3a7d3e7430ee224cab75104f11342a0.png)',
        paddingTop: 50,
        paddingBottom: 50,
      }}
    >
      <S.ProjectsContainer container>
        <S.RepositoriesWrapper item xs={3}>
          <S.RepositoryTitle container flexDirection="row" alignItems="center">
            <Code htmlColor="white" />
            <Typography variant="h4"><FormattedMessage id="home.projects.title" /></Typography>
          </S.RepositoryTitle>
          <S.RepositoriesList>
            {repositories.map((repository) => (
              <Repository
                key={repository.id}
                repository={repository}
              />
            ))}
          </S.RepositoriesList>
        </S.RepositoriesWrapper>
        <S.ProjectsTabs
          item
          xs={9}
          container
          alignItems="center"
          flexDirection="column"
        >
          <Typography variant="h3"><FormattedMessage id="home.projects.description.title" /></Typography>

          <Typography><FormattedMessage id="home.projects.description.content1" /></Typography>
          <Typography><FormattedMessage id="home.projects.description.content2" /></Typography>
        </S.ProjectsTabs>
      </S.ProjectsContainer>
    </Section>
  );
};

export default Projects;
