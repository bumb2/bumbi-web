import styled from 'styled-components';
import { ifProp } from 'styled-tools';

interface BoxProps {
  /**
   * 박스 정렬
   */
  column?: boolean;
  /*
   * justifyContent 정렬 (center, flex-start, space-between)
   */
  justifyContent?: string;
  /*
   * alignItems 정렬 (center, start, space-between)
   */
  alignItems?: string;
  /**
   * 배경 색상
   */
  backgroundColor?: string;
  /**
   * 박스 넓이, 높이
   */
  width?: number | string;
  height?: number | string;
  /**
   * border?: border 설정
   */
  border?: string;
  radius?: string;
  /**
   * 패딩 설정
   */
  padding?: number | string;
  /**
   * margin 설정
   */
  margin?: number | string;
}

const Box = styled.div<BoxProps>`
  width: ${({ width }) => (width ? (typeof width == 'string' ? width : `${width}px`) : '100%')};
  height: ${({ height }) => (height ? (typeof height == 'string' ? height : `${height}px`) : 'auto')};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'transparent')};
  border: ${({ border }) => (border ? border : 'none')};
  border-radius: ${({ radius }) => (radius ? radius : '0px')};
  padding: ${({ padding }) => (padding ? (typeof padding == 'string' ? `${padding}` : `${padding}px`) : '0px')};
  margin: ${({ margin }) => (margin ? (typeof margin == 'string' ? margin : `${margin}px`) : '0px')};
  display: flex;
  flex-direction: ${ifProp('column', 'column', 'row')};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'flex-start')};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'flex-start')};
`;

export default Box;
