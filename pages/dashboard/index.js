import Head from 'next/head'
import { PanelLayout } from "@layouts";
import { Button } from 'antd';

function Dashboard() {
  return (
    <PanelLayout>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </PanelLayout>
  )
}

export default Dashboard;
