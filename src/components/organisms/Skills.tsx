import styled from 'styled-components';
import Image from 'next/image';

import Fonts from '@commons/Fonts';

import Text from '@components/atoms/Text';
import Box from '@components/atoms/Box';
import Images from '@commons/Images';

const Skills = () => {
  return (
    <Wrapper>
      <Box width="60%" column>
        <Text size="2.5vw" color="purple" font={Fonts.SUIT_Heavy}>
          👏 Skills
        </Text>
        <ImageContainer>
          <Image src={Images.SKILLS} />
        </ImageContainer>
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
`;

const ImageContainer = styled.div`
  margin: 4vw 0;
  width: 50vw;
`;

export default Skills;
