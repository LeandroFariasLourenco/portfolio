interface ICompany {
  name: string;
  logo: string;
  query: string;
}

export interface IExperience {
  date: string;
  description: string;
  title: string;
  location: string;
  type: string;
  stack: string;
  icon: string;
  company: ICompany;
}
