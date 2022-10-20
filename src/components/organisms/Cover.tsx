import styled from 'styled-components';

import Theme from '@commons/Theme';
import Fonts from '@commons/Fonts';

import Text from '@components/atoms/Text';
import Box from '@components/atoms/Box';

const Cover = () => {
  return (
    <Wrapper>
      <TitleContainer column>
        <Title>안녕하세요,</Title>
        <Title>개발자 현은비입니다</Title>
      </TitleContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${Theme.colors.purple};
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TitleContainer = styled(Box)`
  position: relative;
  margin-top: 60vh;
  margin-left: 4vw;

  @media (max-width: 768px) {
    margin: -20vw 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled(Text).attrs(() => ({
  size: '7vw',
  font: `${Fonts.SUIT_Bold}`,
  color: 'white',
}))`
  @media (max-width: 768px) {
    font-size: 10vw;
    line-height: 140%;
  }
`;

export default Cover;
