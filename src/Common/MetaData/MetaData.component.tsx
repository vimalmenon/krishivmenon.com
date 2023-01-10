import Head from 'next/head';

import { IMetaData } from './MetaData';

export const MetaData: React.FC<IMetaData> = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="This is personal page for Krishiv Menon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};
