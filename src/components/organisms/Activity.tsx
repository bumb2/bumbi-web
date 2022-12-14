import styled from 'styled-components';

import Fonts from '@commons/Fonts';

import Text from '@components/atoms/Text';
import Box from '@components/atoms/Box';

const Activity = () => {
  return (
    <Wrapper>
      <BoxContainer column>
        <Title>๐ค Activity</Title>
        <Box>
          <LeftContainer>
            <ExperienceText>KU ์ด๋ธ๋ฒ ์ด์</ExperienceText>
            <ExperienceText>ํด์ปคํค</ExperienceText>
            <Date>2021.01 ~ 2021.02</Date>
          </LeftContainer>
          <RightContainer>
            <Content>
              ๊ฑด๊ตญ๋ํ๊ต ์ฐฝ์์ง์๋จ๊ณผ ์ค๊ตญ ์นญํ๋ํ ๊ธฐ์ ์ง์ฃผํ์ฌ๊ฐ ๊ณต๋ ์ฃผ์ตํ โKU ์ด๋ธ๋ฒ ์ด์ ํด์ปคํคโ์์ ๋ฐ๋ ค๋๋ฌผ์ ์ฃผ์ ๋ก ์ฑ์ ๊ฐ๋ฐํ์์ต๋๋ค. ๋ฐ๋ ค๋๋ฌผ์
              ํ๋๊ณผ ๊ฐ์ ์ ๋ถ์ํ์ฌ ์์ก ํ๊ฒฝ์ ์ง๋จํด์ฃผ๋ ์ฑ์ ํตํด ๋์์ ์์ํ์ต๋๋ค. frontend ์ฑ ๊ฐ๋ฐ ๋ฐ ๋ฐํ ๋ฑ์ ๋งก์ ํ์ ๋ฆฌ๋ฉํ์์ต๋๋ค.
            </Content>
          </RightContainer>
        </Box>
        <Line />
        <Box>
          <LeftContainer>
            <ExperienceText>Samsung</ExperienceText>
            <ExperienceText>Open</ExperienceText>
            <ExperienceText>Source</ExperienceText>
            <ExperienceText>Companions</ExperienceText>
            <Date>2021.06 ~ 2022.12</Date>
          </LeftContainer>
          <RightContainer>
            <Content>
              samsung sorfware์ open source๋ฅผ ์ค์ฌ์ผ๋ก software Influencer ํ๋์ ํ์์ต๋๋ค. SSDC 2021 ์์ โSamsung Open source Companions, Connect the
              world!โ๋ผ๋ ์ฃผ์ ๋ก ์ธ์ ๋ฐํ๋ฅผ ์งํํ์์ต๋๋ค. Open Source์ ์ฌ์ฉ๊ณผ copyright, contribution์ ๋ํด ๊ณ ๋ฏผํด๋ณผ ์ ์๋ ๊ธฐํ์์ต๋๋ค.
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
  width: 26%;
  padding: 4vw 4% 0 0;
`;

const RightContainer = styled.div`
  width: 70%;
  padding: 4vw 0 0 0;
`;

const Content = styled(Text).attrs(() => ({
  size: '1.2vw',
  font: `${Fonts.SUIT_Regular}`,
}))`
  line-height: 2vw;
  word-break: break-all;

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

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #cfcfcf;
  margin: 2vw 0;

  @media (max-width: 768px) {
    margin: 16vw 0;
  }
`;

export default Activity;
