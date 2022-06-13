import { useMemo } from 'react';
import { CommonLayout } from 'src/core/layouts';
import Welcome from './components/Welcome/Welcome';
import Experience from './components/Experience/Experience';
import Languages from './components/Languages/Languages';
import About from './components/About/About';
import Academic from './components/Academic/Academic';

import * as S from './styled';

const Home = () => {
  const components = useMemo(() => ([
    <Welcome key="welcome" />,
    <About key="about" />,
    <Experience key="experience" />,
    <Languages key="languages" />,
    <Academic key="academic" />,
  ]), []);

  return (
    <S.HomeContainer>
      <CommonLayout>
        {components.map((component) => component)}
      </CommonLayout>
    </S.HomeContainer>
  );
};
export default Home;
