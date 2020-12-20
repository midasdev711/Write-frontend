import Head from 'next/head'
import { PanelLayout } from "@layouts";
import { Button } from 'antd';

function Overview() {
  return (
    <PanelLayout>
      <Head>
        <title>Overview</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </PanelLayout>
  )
}

export default Overview;
