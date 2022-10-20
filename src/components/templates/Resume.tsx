import styled from 'styled-components';

import Cover from '@components/organisms/Cover';
import About from '@components/organisms/About';
import Experience from '@components/organisms/Experience';
import Activity from '@components/organisms/Activity';
import Skills from '@components/organisms/Skills';
import Education from '@components/organisms/Education';
import Contact from '@components/organisms/Contact';

const Resume = () => {
  return (
    <Wrapper>
      <Cover />
      <About />
      <Experience />
      <Activity />
      <Skills />
      <Education />
      <Contact />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Resume;
