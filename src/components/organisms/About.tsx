import styled from 'styled-components';
import Image from 'next/image';

import Images from '@commons/Images';
import Theme from '@commons/Theme';
import Fonts from '@commons/Fonts';

import Text from '@components/atoms/Text';
import Box from '@components/atoms/Box';

const Cover = () => {
  return (
    <Wrapper>
      <Container>
        <Image src={Images.BUMBI_INSPIRED} alt="bumbi" quality={100} layout="responsive" objectFit="contain" />
      </Container>
      <Box height="1vw" />
      <Text color="purple" size="3.5vw" font={Fonts.SUIT_Heavy}>
        About me
      </Text>
      <Box height="4vw" />
      <Box width="auto" justifyContent="center" alignItems="center">
        <TextWrapper>
          <Content>도전과 변화를 좋아하는 유연한 개발자</Content>
        </TextWrapper>
        <Content>&nbsp;현은비입니다.</Content>
      </Box>
      <Content>React, Typescript, ES6+에 관심이 많습니다.</Content>
      <Content>좋은 사용자 경험을 제공할 수 있는 방법을 항상 고민합니다.</Content>
      <Content>다양한 직무의 구성원들과 유연한 커뮤니케이션 하는 것을 중요하게 생각하며,</Content>
      <Content>팀의 성장에 기여하기 위해 노력합니다.</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vw;
  margin-bottom: 20vw;
`;

const Container = styled.span`
  width: 14vw;
`;

const TextWrapper = styled.span`
  background-color: ${Theme.colors.yellow};
  padding: 0 5px;
  height: 2.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled(Text).attrs(() => ({
  size: '1.5vw',
}))`
  height: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Cover;
