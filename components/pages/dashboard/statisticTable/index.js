import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from 'next/router';
import { AdvancedTable, ProgressStat, CustomTab } from "@components/atoms";


const Container = styled.div`
    background: #fff;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px 10px 0 0;

    .ant-table-wrapper {
        width: 100%;
    }
`;

const Toolbar = styled.div`
    background: #fff;
    width: 100%;
    border-radius: 10px 10px 0 0;
    height: 48px;
    padding-top: 5px;
    box-shadow: inset 0px -1px 0px #F0EFE9;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;

    .tags-block {
        flex: 1 1 auto;
    }
`;

const columns = [
    {
        title: 'Link',
        key: 'link',
        dataIndex: 'link'
    },
    {
        title: 'Views',
        dataIndex: 'views',
        key: 'views',
    },
    {
        title: 'Percent',
        key: 'percent',
        dataIndex: 'percent',
        render: (data) => (<ProgressStat percent={data} />)
    },
];

const refererData = [
    {
        key: '1',
        link: 'google.com',
        views: "5.3k",
        percent: 53,
    },
    {
        key: '2',
        link: 'yahoo.com',
        views: "5.3k",
        percent: 25,
    },
    {
        key: '3',
        link: 'google.com',
        views: "5.3k",
        percent: 63,
    },
    {
        key: '4',
        link: 'medium.com',
        views: "5.3k",
        percent: 53,
    },
    {
        key: '5',
        link: 'google.com',
        views: "5.3k",
        percent: 13,
    },
    {
        key: '6',
        link: 'google.com',
        views: "5.3k",
        percent: 53,
    }
];

const StatisticTable = (props) => {
    const router = useRouter();

    function callback(key) {
        console.log(key);
    }

    const data = [{
        title: "Referers",
        content: <AdvancedTable columns={columns} dataSource={refererData} pagination={ false } showHeader={ false } />
    }, {
        title: "Source",
        content: <AdvancedTable columns={columns} dataSource={refererData} pagination={ false } showHeader={ false } />
    }, {
        title: "Browsers",
        content: <AdvancedTable columns={columns} dataSource={refererData} pagination={ false } showHeader={ false } />
    }, {
        title: "Location",
        content: <AdvancedTable columns={columns} dataSource={refererData} pagination={ false } showHeader={ false } />
    }, {
        title: "Devices",
        content: <AdvancedTable columns={columns} dataSource={refererData} pagination={ false } showHeader={ false } />
    }]

    return (
        <Container>
            <CustomTab data={data}  />
            
        </Container>
    );
}

export default StatisticTable;