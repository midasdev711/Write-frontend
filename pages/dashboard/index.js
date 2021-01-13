import styled from "styled-components";
import PageLayout from "@components/layouts/PageLayout";
import Header from "@components/pages/dashboard/header";
import Overview from "@components/pages/dashboard/overview";
import PostsTable from "@components/pages/dashboard/postsTable";
import StatisticTable from "@components/pages/dashboard/statisticTable";

const BottomSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .posts-table {
      width: 70%;
    }

    .statistic-table {
      width: 29%;
    }
`;

function Dashboard() {
  return (
    <PageLayout
      header={<Header title="Dashboard" />}
      pagetitle="Dashboard"
      content={
        <div>
          <Overview />
          <BottomSection>
            <div className="posts-table">
              <PostsTable />
            </div>
            <div className="statistic-table">
              <StatisticTable />
            </div>
          </BottomSection>
        </div>
      }
    >
    </PageLayout>
    
  )
}

export default Dashboard;
