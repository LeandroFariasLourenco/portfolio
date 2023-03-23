import { useMemo } from 'react';
import { CommonLayout } from 'src/core/layouts';
import Welcome from './components/welcome/welcome';
import Experience from './components/experience/experience';
import Languages from './components/stack/stack';
import About from './components/about/about';
import Academic from './components/academic/academic';

import * as S from './styled';
import MyTimeline from './components/my-timeline/my-timeline';
import Projects from './components/projects/projects';

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
