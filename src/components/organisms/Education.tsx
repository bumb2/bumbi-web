import styled from 'styled-components';

import Fonts from '@commons/Fonts';

import Text from '@components/atoms/Text';
import Box from '@components/atoms/Box';

const Education = () => {
  return (
    <Wrapper>
      <BoxContainer column>
        <Title>🙌 Education</Title>
        <Box>
          <LeftContainer>
            <ExperienceText>건국대학교</ExperienceText>
            <ExperienceText>사학과 재학중</ExperienceText>
            <Date>2018.03 ~ 현재</Date>
          </LeftContainer>
          <RightContainer>
            <Content>
              역사에 대한 관심이 많아 사학과에서 공부 중입니다. 과거로부터 얻은 깨달음이 더 나은 현재를 위한 밑거름이 된다고 생각합니다. 과거를 살아간 수많은
              사람들의 가치관을 배우며 나의 삶에 대한 방향을 모색할 수 있었습니다.
            </Content>
            <Content>
              머릿속의 아이디어를 내 손으로 직접 구현할 수 있다는 것에 매력을 느껴, 개발을 시작하였습니다. 소프트웨어학과 다전공 중이며 과제용 개인 프로젝트를
              진행하면서 더욱 개발의 세계에 빠지게 되었습니다.
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
