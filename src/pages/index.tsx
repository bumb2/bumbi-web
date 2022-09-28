import type { NextPage } from 'next';

import HeadMeta from '@commons/HeadMeta';

import Resume from '@components/templates/Resume';

const Home: NextPage = () => {
  return (
    <>
      <HeadMeta />
      <Resume />
    </>
  );
};

export default Home;
