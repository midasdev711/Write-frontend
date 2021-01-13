import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from 'next/router';
import { Table } from 'antd';
import { Dropdown, TagInput, AdvancedTable } from "@components/atoms";


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
        title: 'Post',
        key: 'post',
        render: ({post, image}) => <a className="link"><img src={image} width="40px" height="40px" style={{ borderRadius: "5px", marginRight: "10px" }}></img>{post}</a>,
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Views',
        dataIndex: 'views',
        key: 'views',
    },
    {
        title: 'Avg time',
        key: 'avgTime',
        dataIndex: 'avgTime'
    },
];

const data = [
    {
        key: '1',
        post: 'Who is the best soccer player ever?',
        image: 'https://i.pinimg.com/originals/9a/e6/c4/9ae6c448f427947c5f7b885aaf86e942.jpg',
        date: 'Apr 13, 2020',
        views: 435,
        avgTime: '1.12 min',
    },
    {
        key: '2',
        post: 'Who will won the Golden Ball Prize in 2021?',
        image: 'https://cdn130.picsart.com/342271907032201.jpg?type=webp&to=crop&r=256',
        date: 'Apr 13, 2020',
        views: 435,
        avgTime: '1.12 min',
    },
    {
        key: '3',
        post: 'Who is the best soccer player ever?',
        image: 'https://cdn130.picsart.com/342271907032201.jpg?type=webp&to=crop&r=256',
        date: 'Apr 13, 2020',
        views: 435,
        avgTime: '1.12 min',
    },
    {
        key: '4',
        post: 'Who is the best soccer player ever?',
        image: 'https://cdn130.picsart.com/342271907032201.jpg?type=webp&to=crop&r=256',
        date: 'Apr 13, 2020',
        views: 435,
        avgTime: '1.12 min',
    },
    {
        key: '5',
        post: 'Who is the best soccer player ever?',
        image: 'https://i.pinimg.com/originals/9a/e6/c4/9ae6c448f427947c5f7b885aaf86e942.jpg',
        date: 'Apr 13, 2020',
        views: 435,
        avgTime: '1.12 min',
    }
];

const PostsTable = ({ title, fetchMore }) => {
    const router = useRouter();

    function callback(key) {
        console.log(key);
    }

    return (
        <Container>
            <Toolbar>
                <Dropdown data={["Posts", "Date"]} style={{ marginRight: "10px" }}/>
                <Dropdown data={["Most viewed", "Most recent"]} style={{ marginRight: "10px" }}/>
                <div className="tags-block">
                    <TagInput />
                </div>
                <Dropdown data={["Today", "Yesterday"]} style={{ marginLeft: "10px", float: "right" }}/>
            </Toolbar>
            <AdvancedTable columns={columns} dataSource={data} pagination={ false } />
        </Container>
    );
}

export default PostsTable;