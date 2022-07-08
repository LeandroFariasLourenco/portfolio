import { useMemo } from 'react';
import { CommonLayout } from 'src/core/layouts';
import Welcome from './components/Welcome/Welcome';
import Experience from './components/Experience/Experience';
import Languages from './components/Stack/Stack';
import About from './components/About/About';
import Academic from './components/Academic/Academic';

import * as S from './styled';
import MyTimeline from './components/MyTimeline/MyTimeline';
import Projects from './components/Projects/Projects';

const Home = () => {
  const components = useMemo(() => ([
    <Welcome key="welcome" />,
    <About key="about" />,
    <Experience key="experience" />,
    <Languages key="languages" />,
    <Academic key="academic" />,
    <Projects key="projects" />,
    <MyTimeline key="timeline" />,
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
