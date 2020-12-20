import React from "react";
import { Menu, Button, Dropdown } from 'antd';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import {
    updatePaginationLimit,
    updatePageData,
    updatePaginationLoading,
    updateTotalResult,
    updateTotalPage
  } from '@actions';
import { UpArrow } from "@components/icons";

const DropdownContainer = styled(Dropdown)`
    height: 100%;
    color: #000;
    font-family: ProximaNova;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #ddd;
    width: 146px;
    svg {
        margin-right: 18px
    }
    .bold {
        font-weight: 600;
        margin-right: 18px;
    }
    .number {
        margin-right: 6px;
    }
`;
const PaginationLimit = ({ fetchMore }) => {
    const dispatch = useDispatch();
    const { pagination } = useSelector((state) => state);

    const dropdownItem = (
        <Menu
            onClick={(item, key) => {
                if (pagination.pageData.data === null) 
                {
                    return;
                }
                
                dispatch(updatePaginationLimit(parseInt(item.key)));

                fetchMore({
                    variables: {
                        page: parseInt(pagination.currentPage),
                        limit: parseInt(item.key),
                        filter: pagination.filter
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                        if (!fetchMoreResult) return prev;

                        dispatch(updatePaginationLoading(false));
                        dispatch(updatePageData(fetchMoreResult));
                        dispatch(updateTotalResult(fetchMoreResult.data.info.count));
                        dispatch(updateTotalPage(fetchMoreResult.data.info.pages));

                        return fetchMoreResult;
                    }
                });
            }}
        >
            <Menu.Item key="15">15</Menu.Item>
            <Menu.Item key="30">30</Menu.Item>
            <Menu.Item key="50">50</Menu.Item>
        </Menu>
    );

    return (
        <DropdownContainer overlay={dropdownItem} trigger={['click']} placement="topCenter">
            <Button type="text">
                <div>
                    <span className="bold">Result:</span>
                    <span className="number">{pagination.paginationLimit}</span>
                </div>
                <UpArrow />
            </Button>
        </DropdownContainer>
    )
}

export default PaginationLimit;