import React from 'react';
import Head from 'next/head';
import Header from './Header';

export default function Layout({title, keywords, description, children}) {
  return (
    <div>
      <Head><title>{title}</title>
      <meta name="description" content={description}/>
      <meta name='keywords' content={keywords} />
      </Head>
      <Header />
{children}
    </div>
  )
}


Layout.defaultProps = {
    title: 'DJ Events | Find the hottest parties in town',
    description: 'Find the latest and hottest parties in town',
    keywords: 'party, DJs, muscial events'
}
