const colors = {
  /**
   * 보라색 컬러
   */
  purple: '#8247ff',
  /**
   * 노란색 컬러
   */
  yellow: '#F9BB16',
  /**
   * 빨간색 컬러
   */
  red: '#f43734',
  /**
   * 회색 컬러
   */
  gray: '#858585',
  /**
   * 검정색 컬럭
   */
  black: '#000000',
  /**
   * 하얀색 컬러
   */
  white: '#FFFFFF',
  /**
   * 투명
   */
  transparent: 'transparent',
};

const fontSizes = {
  /**
   * 34px
   */
  xxxlarge: '34px',
  /**
   * 24px
   */
  xxlarge: '24px',
  /**
   * 18px
   */
  xlarge: '18px',
  /**
   * 16px
   */
  large: '16px',
  /**
   * 14px
   */
  medium: '14px',
  /**
   * 12px
   */
  small: '12px',
  /**
   * 10px
   */
  xsmall: '10px',
};

const Theme = {
  colors,
  fontSizes,
};

export type CustomTheme = typeof Theme;
export default Theme;
