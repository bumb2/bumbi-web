import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import Fonts from '../../common/Fonts';

interface TextProps {
  /**
   * 10, 12, 14, 16, 18px, 20px, 24px 크기 지정
   */
  size: 'xxxsmall' | 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | string;
  /**
   * 색 지정
   */
  color?:
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'white'
  | 'brightGray'
  | 'lightGray'
  | 'middleGray'
  | 'darkGray'
  | 'black';
  /**
   * 글씨 굵게
   */
  bold?: boolean;
  /**
   * 밑줄
   */
  underline?: boolean;
  /**
   * 가운데로 이동
   */
  centered?: boolean;
  /**
   * 폰트 이름
   */
  font?: string;
  /**
   * 가운데로 이동
   */
  textAlign?: 'left' | 'center' | 'right' | 'justify';
}

/**
 * 기본 텍스트
 */
const Text = styled.Text<TextProps>`
  font-size: ${({ size, theme }) => (theme.fontSizes[size] ? theme.fontSizes[size] : size)};
  color: ${({ color, theme }) => (color ? `${theme.colors[color]}` : 'black')};
  font-weight: ${ifProp('bold', 'bold', 'normal')};
  align-self: ${ifProp('centered', 'center', 'auto')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  text-decoration: ${({ underline, theme, color }) =>
    underline ? `underline ${color ? theme.colors[color] : 'black'}` : 'none'};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-family: ${({ font }) => (font ? font : Fonts.NotoSans_Regular)};
`;

export default Text;
