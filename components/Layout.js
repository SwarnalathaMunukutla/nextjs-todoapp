import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Showcase from './Showcase'
import {useRouter} from 'next/router';

export default function Layout({title, keywords, description, children}) {
  const router = useRouter();
  return (
    <div>
      <Head><title>{title}</title>
      <meta name="description" content={description}/>
      <meta name='keywords' content={keywords} />
      </Head>
      <Header />
     {router.pathname === '/' && <Showcase/>}
{children}
<Footer />
    </div>
  )
}


Layout.defaultProps = {
    title: 'DJ Events | Find the hottest parties in town',
    description: 'Find the latest and hottest parties in town',
    keywords: 'party, DJs, muscial events'
}
