import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from 'next/router';
import { Tabs } from 'antd';
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
    border-radius: 10px 10px 0 0;

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
        padding: 0 10px;
        border-radius: 10px 10px 0 0;
        height: 48px;
        .ant-tabs-nav-list {
            width: 100%;

            .ant-tabs-tab {
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 16px;
                padding-left: 12px;
                padding-right: 12px;
                color: ${ColorSchema.light.dark1};
                margin: 0;
            }

            .ant-tabs-tab-active {
                .ant-tabs-tab-btn {
                    font-style: normal;
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 16px;
                    color: ${ColorSchema.light.dark1};
                }
            }

            .ant-tabs-ink-bar {
                background: black;
            }
        }
    }
`;

const CustomTab = (props) => {
    const router = useRouter();

    function callback(key) {
        console.log(key);
    }

    return (
        <Container>
            <NewTabs defaultActiveKey="0" onChange={callback}>
                {
                    props.data.map((tab, index) => {
                        return (
                            <TabPane tab={tab.title} key={index}>
                                {tab.content}
                            </TabPane>
                        )
                    })
                }
            </NewTabs>
        </Container>
    );
}

export default CustomTab;