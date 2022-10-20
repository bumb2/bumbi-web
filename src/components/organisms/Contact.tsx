import styled from 'styled-components';
import IonIcon from '@reacticons/ionicons';

import Fonts from '@commons/Fonts';

import Text from '@components/atoms/Text';
import Box from '@components/atoms/Box';

const Contact = () => {
  return (
    <Wrapper>
      <Box width="60%" column>
        <Text size="2.5vw" color="purple" font={Fonts.SUIT_Heavy}>
          🤙 Contact
        </Text>
        <Box>
          <LeftContainer>
            <ContactContainer>
              <IonIcon name="mail-open-outline" size="large" />
              <Content>e-mail</Content>
            </ContactContainer>
            <ContactContainer>
              <IonIcon name="sparkles-outline" size="large" />
              <Content>site</Content>
            </ContactContainer>
            <ContactContainer>
              <IonIcon name="home-outline" size="large" />
              <Content>blog</Content>
            </ContactContainer>
            <ContactContainer>
              <IonIcon name="logo-github" size="large" />
              <Content>github</Content>
            </ContactContainer>
            <ContactContainer>
              <IonIcon name="logo-linkedin" size="large" />
              <Content>linkedin</Content>
            </ContactContainer>
          </LeftContainer>
          <RightContainer>
            <Content>bbumbb2@gmail.com</Content>
            <Content>bumbi.dev</Content>
            <Content>blog.bumbi.dev</Content>
            <Content>github.com/bumb2</Content>
            <Content>linkedin.com/in/eunbi-hyun-58504424a</Content>
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
  width: 20%;
  padding: 4vw 0;
`;

const RightContainer = styled.div`
  width: 80%;
  padding: 4vw 0;
`;

const Content = styled(Text).attrs(() => ({
  size: '1.6vw',
}))`
  line-height: 2.5vw;
  margin-left: 15px;

  &: nth-child(1) {
    margin-bottom: 2vw;
  }

  &: nth-child(3) {
    margin-bottom: 2vw;
  }
`;

const ContactContainer = styled(Box)`
  &: nth-child(1) {
    margin-bottom: 2vw;
  }

  &: nth-child(3) {
    margin-bottom: 2vw;
  }
`;

export default Contact;
