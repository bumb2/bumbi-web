import styled from 'styled-components';
import IonIcon from '@reacticons/ionicons';

import Fonts from '@commons/Fonts';

import Text from '@components/atoms/Text';
import Box from '@components/atoms/Box';

const Contact = () => {
  return (
    <Wrapper>
      <BoxContainer column>
        <Title>🤙 Contact</Title>
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
            <Link href="https://bumbi.dev" target="_blank">
              bumbi.dev
            </Link>
            <Link href="https://blob.bumbi.dev" target="_blank">
              blog.bumbi.dev
            </Link>
            <Link href="https://github.com/bumb2" target="_blank">
              github.com/bumb2
            </Link>
            <Link href="https://linkedin.com/in/eunbi-hyun-58504424a" target="_blank">
              linkedin.com/in/eunbi-hyun-58504424a
            </Link>
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

const LeftContainer = styled.div`
  width: 30%;
  padding: 4vw 0;
`;

const RightContainer = styled.div`
  width: 70%;
  padding: 4vw 0;
`;

const Content = styled(Text).attrs(() => ({
  size: '1.6vw',
}))`
  line-height: 2.5vw;
  margin-left: 15px;
  font-family: SUIT-Medium;

  @media (max-width: 768px) {
    font-size: 4vw;
    line-height: 10vw;
    margin-left: 4vw;
  }

  &: nth-child(1) {
    margin-bottom: 2vw;

    @media (max-width: 768px) {
      margin-bottom: 10vw;
    }
  }

  &: nth-child(3) {
    margin-bottom: 2vw;

    @media (max-width: 768px) {
      margin-bottom: 10vw;
    }
  }
`;

const Link = styled.a`
  font-size: 1.6vw;
  line-height: 2.5vw;
  margin-left: 15px;
  display: block;
  color: black;
  text-decoration: none;
  font-family: SUIT-Medium;

  @media (max-width: 768px) {
    font-size: 4vw;
    line-height: 10vw;
    margin-left: 4vw;
  }

  &: nth-child(1) {
    margin-bottom: 2vw;

    @media (max-width: 768px) {
      margin-bottom: 10vw;
    }
  }

  &: nth-child(3) {
    margin-bottom: 2vw;

    @media (max-width: 768px) {
      margin-bottom: 10vw;
    }
  }
`;

const ContactContainer = styled(Box)`
  &: nth-child(1) {
    margin-bottom: 2vw;

    @media (max-width: 768px) {
      margin-bottom: 10vw;
    }
  }

  &: nth-child(3) {
    margin-bottom: 2vw;

    @media (max-width: 768px) {
      margin-bottom: 10vw;
    }
  }
`;

export default Contact;
