import Head from 'next/head'
import { PanelLayout } from "@layouts";
import { Button } from 'antd';

function Categories() {
  return (
    <PanelLayout>
      <Head>
        <title>Categories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </PanelLayout>
  )
}


export default Categories;
