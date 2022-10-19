import type { NextPage } from 'next';
import { ThemeProvider } from 'styled-components';

import HeadMeta from '@commons/HeadMeta';
import Theme from '@commons/Theme';

import Resume from '@components/templates/Resume';

const Home: NextPage = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <HeadMeta />
        <Resume />
      </ThemeProvider>
    </>
  );
};

export default Home;
