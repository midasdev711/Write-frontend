import Head from 'next/head'
import { PanelLayout } from "@layouts";
import { Button } from 'antd';

function Heatmap() {
  return (
    <PanelLayout>
      <Head>
        <title>Heatmap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </PanelLayout>
  )
}

export default Heatmap;
