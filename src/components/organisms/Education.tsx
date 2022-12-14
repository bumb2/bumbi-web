import styled from 'styled-components';

import Fonts from '@commons/Fonts';

import Text from '@components/atoms/Text';
import Box from '@components/atoms/Box';

const Education = () => {
  return (
    <Wrapper>
      <BoxContainer column>
        <Title>π Education</Title>
        <Box>
          <LeftContainer>
            <ExperienceText>κ±΄κ΅­λνκ΅</ExperienceText>
            <ExperienceText>μ¬νκ³Ό μ¬νμ€</ExperienceText>
            <Date>2018.03 ~ νμ¬</Date>
          </LeftContainer>
          <RightContainer>
            <Content>
              μ­μ¬μ λν κ΄μ¬μ΄ λ§μ μ¬νκ³Όμμ κ³΅λΆ μ€μλλ€. κ³Όκ±°λ‘λΆν° μ»μ κΉ¨λ¬μμ΄ λ λμ νμ¬λ₯Ό μν λ°κ±°λ¦μ΄ λλ€κ³  μκ°ν©λλ€. κ³Όκ±°λ₯Ό μ΄μκ° μλ§μ
              μ¬λλ€μ κ°μΉκ΄μ λ°°μ°λ©° λμ μΆμ λν λ°©ν₯μ λͺ¨μν  μ μμμ΅λλ€.
            </Content>
            <Content>
              λ¨Έλ¦Ώμμ μμ΄λμ΄λ₯Ό λ΄ μμΌλ‘ μ§μ  κ΅¬νν  μ μλ€λ κ²μ λ§€λ ₯μ λκ»΄, κ°λ°μ μμνμμ΅λλ€. μννΈμ¨μ΄νκ³Ό λ€μ κ³΅ μ€μ΄λ©° κ³Όμ μ© κ°μΈ νλ‘μ νΈλ₯Ό
              μ§ννλ©΄μ λμ± κ°λ°μ μΈκ³μ λΉ μ§κ² λμμ΅λλ€.
            </Content>
          </RightContainer>
        </Box>
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

const ExperienceText = styled(Text).attrs(() => ({
  size: '2vw',
  color: 'purple',
}))`
  @media (max-width: 768px) {
    font-size: 4.5vw;
    word-break: break-all;
  }
`;

const LeftContainer = styled.div`
  width: 24%;
  padding: 4vw 6% 0 0;
`;

const RightContainer = styled.div`
  width: 70%;
  padding: 4vw 0 0 0;
`;

const Content = styled(Text).attrs(() => ({
  size: '1.2vw',
}))`
  line-height: 2vw;
  margin-bottom: 2vw;
  font-family: SUIT-Regular;

  @media (max-width: 768px) {
    font-size: 4vw;
    line-height: 6vw;
  }
`;

const Date = styled(Text).attrs(() => ({
  size: '1vw',
  color: 'gray',
}))`
  margin-top: 0.5vw;
  margin-bottom: 4vw;

  @media (max-width: 768px) {
    font-size: 3vw;
    font-family: SUIT-Medium;
  }
`;

export default Education;
