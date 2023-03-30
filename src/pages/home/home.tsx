import { useMemo } from 'react';
import { CommonLayout } from 'src/core/layouts';
import About from './components/about/about';
import Academic from './components/academic/academic';
import Experience from './components/experience/experience';
import Languages from './components/stack/stack';
import Welcome from './components/welcome/welcome';

import MyTimeline from './components/my-timeline/my-timeline';
import Projects from './components/projects/projects';
import * as S from './styled';

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
