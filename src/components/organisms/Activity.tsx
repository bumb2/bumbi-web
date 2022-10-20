import styled from 'styled-components';

import Fonts from '@commons/Fonts';

import Text from '@components/atoms/Text';
import Box from '@components/atoms/Box';

const Activity = () => {
  return (
    <Wrapper>
      <Box width="60%" column>
        <Text size="2.5vw" color="purple" font={Fonts.SUIT_Heavy}>
          🤘 Activity
        </Text>
        <Box>
          <LeftContainer>
            <Text size="2vw" color="purple">
              KU 이노베이션
            </Text>
            <Text size="2vw" color="purple">
              해커톤
            </Text>
            <Date>2021.01 ~ 2021.02</Date>
          </LeftContainer>
          <RightContainer>
            <Content>
              건국대학교 창업지원단과 중국 칭화대학 기술지주회사가 공동 주최한 ‘KU 이노베이션 해커톤’에서 반려동물을 주제로 앱을 개발하였습니다. 반려동물의
              행동과 감정을 분석하여 양육 환경을 진단해주는 앱을 통해 대상을 수상했습니다. frontend 앱 개발 및 발표 등을 맡아 팀을 리딩하였습니다.
            </Content>
          </RightContainer>
        </Box>
        <Line />
        <Box>
          <LeftContainer>
            <Text size="2vw" color="purple">
              Samsung
            </Text>
            <Text size="2vw" color="purple">
              Open
            </Text>
            <Text size="2vw" color="purple">
              Source
            </Text>
            <Text size="2vw" color="purple">
              Companions
            </Text>
            <Date>2021.06 ~ 2022.12</Date>
          </LeftContainer>
          <RightContainer>
            <Content>
              samsung sorfware와 open source를 중심으로 software Influencer 활동을 하였습니다. SSDC 2021 에서 “Samsung Open source Companions, Connect the
              world!”라는 주제로 세션 발표를 진행하였습니다. Open Source의 사용과 copyright, contribution에 대해 고민해볼 수 있는 기회였습니다.
            </Content>
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
`;

const Date = styled(Text).attrs(() => ({
  size: '1vw',
  color: 'gray',
}))`
  margin-top: 0.5vw;
  margin-bottom: 4vw;
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #cfcfcf;
  margin: 2vw 0;
`;

export default Activity;
