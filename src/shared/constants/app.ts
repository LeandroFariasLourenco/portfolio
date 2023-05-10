import { ELanguages } from '../models';

export const APP = {
  header: {
    height: 55,
  },
  socials: {
    github: 'https://github.com/LeandroFariasLourenco',
    linkedIn: 'https://www.linkedin.com/in/leandro-lourenço-7b707a17b',
  },
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
  aws: {
    assets: 'https://d255kommyg5uck.cloudfront.net',
    curriculum: {
      [ELanguages.English]: 'https://d255kommyg5uck.cloudfront.net/curriculum-en-us.pdf',
      [ELanguages.Portuguese]: 'https://d255kommyg5uck.cloudfront.net/curriculum-pt-br.pdf',
    },
  },
};
