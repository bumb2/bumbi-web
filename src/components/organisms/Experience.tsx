import styled from 'styled-components';
import Image from 'next/image';

import Images from '@commons/Images';
import Fonts from '@commons/Fonts';

import Text from '@components/atoms/Text';
import Box from '@components/atoms/Box';

const Experience = () => {
  return (
    <Wrapper>
      <Box width="60%" column>
        <Text size="2.5vw" color="purple" font={Fonts.SUIT_Heavy}>
          👊 Work Experience
        </Text>
        <Box>
          <LeftContainer>
            <Text size="2vw">파이리코</Text>
            <Date>2020.10 ~ 현재</Date>
          </LeftContainer>
          <RightContainer>
            <ProjectName>MeetPet Partners 서비스 개발</ProjectName>
            <Date>2021.09 ~ 현재</Date>
            <ProjectImage>
              <Image src={Images.MEETPET_PARTNERS} />
            </ProjectImage>
            <Content>
              강아지의 정보를 관리하고 수의사에게 받은 검진서를 확인할 수 있는 펫샵 사장님 전용 애플리케이션을 개발하였습니다. 약 2개월 간 초기 버전의
              프론트엔드와 백엔드 대부분을 개발했습니다. 2022년부터 서비스를 시작하였고, 유지 및 보수 진행 중입니다.
            </Content>
            <Practice>Frontend</Practice>
            <Content>- 밋펫 파트너스 iOS/android 개발</Content>
            <Content>- Atomic design 을 활용하여 디자인 시스템 도입</Content>
            <Content>- Redux를 활용한 전체 상태 관리 </Content>
            <Content>- storybook을 이용한 컴포넌트 기반 개발</Content>
            <Practice>Tech Stack</Practice>
            <Content>TypeScript, React Native, styled-components, redux</Content>
            <Line />

            <ProjectName>MeetPet Vet 서비스 개발</ProjectName>
            <Date>2021.09 ~ 현재</Date>
            <Content>강아지의 검진 정보를 입력하고 관리할 수 있는 수의사 전용 웹 페이지의 기능 일부를 구현하고 유지 및 보수 진행 중입니다.</Content>
            <Practice>Frontend</Practice>
            <Content>- Atomic design 을 활용하여 디자인 시스템 도입</Content>
            <Content>- mobx를 사용하여 상태 관리 </Content>
            <Content>- 다양한 브라우저 환경 및 사이즈 대응</Content>
            <Practice>Tech Stack</Practice>
            <Content>TypeScript, Next.js, styled-components, mobx</Content>
          </RightContainer>
        </Box>
      </Box>
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
`;

const ProjectName = styled(Text).attrs(() => ({
  size: '2vw',
  color: 'purple',
  font: `${Fonts.SUIT_SemiBold}`,
}))``;

const Date = styled(Text).attrs(() => ({
  size: '1vw',
  color: 'gray',
}))`
  margin-bottom: 4vw;
  margin-top: 0.5vw;
`;

const Practice = styled(Text).attrs(() => ({
  size: '1.5vw',
  color: 'purple',
}))`
  margin-top: 3vw;
  margin-bottom: 1vw;
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #cfcfcf;
  margin: 8vw 0;
`;

const ProjectImage = styled.div`
  margin-bottom: 50px;
`;

export default Experience;
