import { IGithubRepository } from 'src/core/models';

class GithubService {
  private url = 'https://api.github.com/users/leandrofariaslourenco/repos';

  public async getRepositories(): Promise<IGithubRepository[]> {
    const repositories = await fetch(this.url).then((response) => response.json()) as IGithubRepository[];
    return repositories;
  }
}

export default new GithubService();
