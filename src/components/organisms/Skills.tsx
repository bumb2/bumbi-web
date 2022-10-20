import styled from 'styled-components';

import Fonts from '@commons/Fonts';

import Text from '@components/atoms/Text';
import Box from '@components/atoms/Box';
import Images from '@commons/Images';

const Skills = () => {
  return (
    <Wrapper>
      <BoxContainer column>
        <Title>👏 Skills</Title>
        <ImageContainer>
          <img src="/static/Images/skills.png" width="100%" />
        </ImageContainer>
      </BoxContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow-x: hidden;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10vw;

  @media (max-width: 768px) {
    margin-bottom: 50vw;
  }
`;

const BoxContainer = styled(Box).attrs(() => ({
  width: '60%',
}))`
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled(Text).attrs(() => ({
  size: '2.5vw',
  color: 'purple',
  font: `${Fonts.SUIT_Heavy}`,
}))`
  @media (max-width: 768px) {
    font-size: 7.5vw;
    margin-bottom: 5vw;
  }
`;

const ImageContainer = styled.div`
  margin: 4vw 0;
  width: 50vw;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default Skills;
