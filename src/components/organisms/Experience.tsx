import styled from 'styled-components';

import Fonts from '@commons/Fonts';

import Text from '@components/atoms/Text';
import Box from '@components/atoms/Box';

const Experience = () => {
  return (
    <Wrapper>
      <BoxContainer column>
        <Title>π Work Experience</Title>
        <Box>
          <LeftContainer>
            <Company>νμ΄λ¦¬μ½</Company>
            <Date>2020.10 ~ νμ¬</Date>
          </LeftContainer>
          <RightContainer>
            <ProjectName>MeetPet Partners μλΉμ€ κ°λ°</ProjectName>
            <Date>2021.09 ~ νμ¬</Date>
            <ProjectImage>
              <img src="/static/Images/meetpet-partners.png" width="100%" />
            </ProjectImage>
            <Content>
              κ°μμ§μ μ λ³΄λ₯Ό κ΄λ¦¬νκ³  μμμ¬μκ² λ°μ κ²μ§μλ₯Ό νμΈν  μ μλ ν«μ΅ μ¬μ₯λ μ μ© μ νλ¦¬μΌμ΄μμ κ°λ°νμμ΅λλ€. μ½ 2κ°μ κ° μ΄κΈ° λ²μ μ
              νλ‘ νΈμλμ λ°±μλ λλΆλΆμ κ°λ°νμ΅λλ€. 2022λλΆν° μλΉμ€λ₯Ό μμνμκ³ , μ μ§ λ° λ³΄μ μ§ν μ€μλλ€.
            </Content>
            <Practice>Frontend</Practice>
            <Content>- λ°ν« ννΈλμ€ iOS/android κ°λ°</Content>
            <Content>- Atomic design μ νμ©νμ¬ λμμΈ μμ€ν λμ</Content>
            <Content>- Reduxλ₯Ό νμ©ν μ μ²΄ μν κ΄λ¦¬ </Content>
            <Content>- storybookμ μ΄μ©ν μ»΄ν¬λνΈ κΈ°λ° κ°λ°</Content>
            <Practice>Tech Stack</Practice>
            <Content>TypeScript, React Native, styled-components, redux</Content>
            <Line />

            <ProjectName>MeetPet Vet μλΉμ€ κ°λ°</ProjectName>
            <Date>2021.09 ~ νμ¬</Date>
            <Content>κ°μμ§μ κ²μ§ μ λ³΄λ₯Ό μλ ₯νκ³  κ΄λ¦¬ν  μ μλ μμμ¬ μ μ© μΉ νμ΄μ§μ κΈ°λ₯ μΌλΆλ₯Ό κ΅¬ννκ³  μ μ§ λ° λ³΄μ μ§ν μ€μλλ€.</Content>
            <Practice>Frontend</Practice>
            <Content>- Atomic design μ νμ©νμ¬ λμμΈ μμ€ν λμ</Content>
            <Content>- mobxλ₯Ό μ¬μ©νμ¬ μν κ΄λ¦¬ </Content>
            <Content>- λ€μν λΈλΌμ°μ  νκ²½ λ° μ¬μ΄μ¦ λμ</Content>
            <Practice>Tech Stack</Practice>
            <Content>TypeScript, Next.js, styled-components, mobx</Content>
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

const Company = styled(Text).attrs(() => ({
  size: '2vw',
}))`
  @media (max-width: 768px) {
    font-size: 6vw;
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

const LeftContainer = styled.div`
  width: 30%;
  padding: 4vw 0;
`;

const RightContainer = styled.div`
  width: 70%;
  padding: 4vw 0;
`;

const Content = styled(Text).attrs(() => ({
  size: '1.2vw',
}))`
  line-height: 2vw;
  font-family: SUIT-Regular;

  @media (max-width: 768px) {
    font-size: 4vw;
    line-height: 6vw;
    font-family: SUIT-Regular;
  }
`;

const ProjectName = styled(Text).attrs(() => ({
  size: '2vw',
  color: 'purple',
  font: `${Fonts.SUIT_SemiBold}`,
}))`
  @media (max-width: 768px) {
    font-size: 6vw;
    font-family: SUIT-Bold;
  }
`;

const Date = styled(Text).attrs(() => ({
  size: '1vw',
  color: 'gray',
}))`
  margin-bottom: 4vw;
  margin-top: 0.5vw;

  @media (max-width: 768px) {
    font-size: 3vw;
    font-family: SUIT-Medium;
  }
`;

const Practice = styled(Text).attrs(() => ({
  size: '1.5vw',
  color: 'purple',
}))`
  margin-top: 3vw;
  margin-bottom: 1vw;

  @media (max-width: 768px) {
    font-size: 5vw;
    margin-top: 8vw;
  }
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #cfcfcf;
  margin: 8vw 0;

  @media (max-width: 768px) {
    margin: 16vw 0;
  }
`;

const ProjectImage = styled.div`
  margin-bottom: 3vw;
`;

export default Experience;
