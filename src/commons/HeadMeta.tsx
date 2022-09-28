import React from 'react';
import Head from 'next/head';

import Images from '@commons/Images';

const HeadMeta = ({
  title = `은비's History`,
  description = '안녕하세요, 개발자 현은비입니다!',
  keyword = '이력서, 개발자, 개발, 코딩, 성장, 경험, developer, engineering',
  thumbnail = Images.THUMBNAIL,
}) => {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keyword" content={keyword} />

      <meta itemProp="headline" content={title} />
      <meta itemProp="description" content={description} />

      <meta property="og:image" content={thumbnail} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta property="og:locale" content="ko_KR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="은비's History" />

      <link rel="canonical" href="https://bumbi.dev" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, user-scalable=0" />
    </Head>
  );
};

export default HeadMeta;
