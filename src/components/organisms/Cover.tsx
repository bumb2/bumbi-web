import styled from 'styled-components';

import Theme from '@commons/Theme';
import Fonts from '@commons/Fonts';

import Text from '@components/atoms/Text';
import Box from '@components/atoms/Box';

const Cover = () => {
  return (
    <Wrapper>
      <Title column>
        <Text size="6.5vw" font={Fonts.SUIT_Bold} color="white">
          안녕하세요,
        </Text>
        <Text size="6.5vw" font={Fonts.SUIT_Bold} color="white">
          개발자 현은비입니다
        </Text>
      </Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${Theme.colors.purple};
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
`;

const Title = styled(Box)`
  position: relative;
  margin-top: 60vh;
  margin-left: 4vw;
`;

export default Cover;
