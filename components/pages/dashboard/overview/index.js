import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from 'next/router';
import { Tabs } from 'antd';
import { DashboardStat, BarChart, CustomSwitch } from "@components/atoms";
import { ColorSchema } from "@/config";

const { TabPane } = Tabs;

const Container = styled.div`
    background: #fff;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .left-side, .right-side {
        display: flex;
        flex-direction: row;
        height: 48px;
    }

    .page-title {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 16px;
        font-weight: 600;
        font-size: 20px;
        line-height: 16px;
    }
`;

const NewTabs = styled(Tabs)`
    width: 100%;

    .ant-tabs-nav {
        margin-bottom: 0;
        .ant-tabs-nav-list {
            width: 100%;
            .ant-tabs-tab {
                padding: 0 9% 0 0;
                margin: 0;
                box-shadow: inset -1px -1px 0px rgba(198, 209, 221, 0.5);
                .tab-label__first, .tab-label__second {
                    color: rgba(20, 16, 0, 0.4);
                }
            }
    
            .ant-tabs-tab-active {
                box-shadow: 1px 0px 1px rgba(198, 209, 221, 0.5);
                .tab-label__first, .tab-label__second {
                    color: #141000;
                }
            }
    
            .ant-tabs-ink-bar {
                display: none;
            }
        }
        .ant-tabs-extra-content {
            padding: 10px;
        }
    }
`;

const TabContent = styled.div`
    width: 100%;
    min-height: 300px;
    height: 300px;
    display: flex;
    .intro {
        width: 30%;
        padding: 50px 20px;
        
        h3 {
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 16px;
            color: ${ColorSchema.light.dark1};
        }

        p {
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            color: ${ColorSchema.light.dark1};
        }
    }

    .chart-block {
        width: 70%;
        height: 100%;
        padding: 25px;
    }
`;

const chartData = [
    {
        "country": "AD",
        "hot dog": 28,
        "burger": 44,
    },
    {
        "country": "AE",
        "hot dog": 17,
        "burger": 46,
    },
    {
        "country": "AF",
        "hot dog": 16,
        "burger": 76,
    },
    {
        "country": "AG",
        "hot dog": 10,
        "burger": 24,
    },
    {
        "country": "AI",
        "hot dog": 10,
        "burger": 23,
    },
    {
        "country": "AL",
        "hot dog": 71,
        "burger": 20,
    },
    {
        "country": "AM",
        "hot dog": 39,
        "burger": 40,
    }
]

const Overview = (props) => {
    const router = useRouter();

    function callback(key) {
        console.log(key);
    }

    const extraContent = <CustomSwitch onChange={callback}/>;

    return (
        <Container>
            <NewTabs defaultActiveKey="1" onChange={callback} tabBarExtraContent={extraContent}>
                <TabPane tab={<DashboardStat title="10.5K" subtitle="Views" />} key="1">
                    <TabContent>
                        <div className="intro">
                            <h3>You're off to a great start!</h3>
                            <p>21% more traffic than on an average Monday.</p>
                        </div>
                        <div className="chart-block">
                            <BarChart 
                                data={chartData} 
                                keys={['hot dog', 'burger']} 
                                valueScale={{ type: 'linear' }} 
                                colors={["rgba(255, 209, 0, 0.8)", "rgba(20, 16, 0, 0.5)"]}
                                indexBy="country"
                                margin={{ top: 25, right: 50, bottom: 25, left: 50 }}
                                padding={0.3}
                                indexScale={{ type: 'band', round: true }}
                                borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                                axisTop={null}
                                axisRight={null}
                                axisBottom={{
                                    tickSize: 0,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                }}
                                axisLeft={{
                                    tickSize: 0,
                                    tickPadding: 16,
                                    tickRotation: 0
                                }}
                                animate={true}
                                motionStiffness={90}
                                motionDamping={15}
                                gridYValues={[0, 20, 40, 60, 80, 100]}
                            />
                        </div>
                    </TabContent>
                </TabPane>
                <TabPane tab={<DashboardStat title="5.8K" subtitle="Users" />} key="2">
                    <TabContent>
                        <div className="intro">
                            <h3>You're off to a great start!</h3>
                            <p>21% more traffic than on an average Monday.</p>
                        </div>
                        <div className="chart-block">
                            <BarChart 
                                data={chartData} 
                                keys={['hot dog', 'burger']} 
                                valueScale={{ type: 'linear' }} 
                                colors={["rgba(255, 209, 0, 0.8)", "rgba(20, 16, 0, 0.5)"]}
                                indexBy="country"
                                margin={{ top: 25, right: 50, bottom: 25, left: 50 }}
                                padding={0.3}
                                indexScale={{ type: 'band', round: true }}
                                borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                                axisTop={null}
                                axisRight={null}
                                axisBottom={{
                                    tickSize: 0,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                }}
                                axisLeft={{
                                    tickSize: 0,
                                    tickPadding: 16,
                                    tickRotation: 0
                                }}
                                animate={true}
                                motionStiffness={90}
                                motionDamping={15}
                                gridYValues={[0, 20, 40, 60, 80, 100]}
                            />
                        </div>
                    </TabContent>
                </TabPane>
                <TabPane tab={<DashboardStat title="9min" subtitle="Avg reading time" />} key="3">
                </TabPane>
                <TabPane tab={<DashboardStat title="40%" subtitle="Full reads" />} key="4">
                </TabPane>
                <TabPane tab={<DashboardStat title="$90K" subtitle="Revenue" />} key="5">
                </TabPane>
            </NewTabs>
        </Container>
    );
}

export default Overview;