import Head from 'next/head'
import { PanelLayout } from "@layouts";
import { Button } from 'antd';

function Authors() {
  return (
    <PanelLayout>
      <Head>
        <title>Authors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </PanelLayout>
  )
}

export default Authors;
