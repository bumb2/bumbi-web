import styled from 'styled-components';

import Cover from '@components/organisms/Cover';

const Resume = () => {
  return (
    <Wrapper>
      <Cover />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
`;

export default Resume;
