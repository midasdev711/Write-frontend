import React, { useState } from "react";
import { Menu, Button, Pagination } from 'antd';
import styled from "styled-components";
import { NextArrow, PreviousArrow } from "@components/icons";
import { useSelector } from 'react-redux';
import {
    updatePageData,
    updatePaginationLoading,
    updateTotalResult,
    updateTotalPage,
    changeCurrentPage,
    nextPage,
    previousPage
  } from '@actions';
import { useDispatch } from 'react-redux';

const PagerContainer = styled.div`
    display: flex;
    border-left: 1px solid #ddd;

    ul {
        border-right: 1px solid #ddd;
    }

    .ant-pagination-prev {
        display: none;
    }
    .ant-pagination-next {
        display: none;
    }
    .ant-pagination-item {
        height: 100%;
        width: 48px;
        padding: 0;
        margin: 0;
        border-radius: 0;
        align-items: center;
        border: none;

        a {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .ant-pagination-item-active {
        a {
            color: #000
        }
    }
`;
const PaginationContainer = styled(Pagination)`
`;
const PagerButtonContainer = styled.div`
    width: 96px;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;

    .pre, .next {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
const PaginationPager = ({ fetchMore }) => {
    const { pagination } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [nextIsActive, setNextIsAcitve] = useState(pagination.currentPage + 1 < pagination.totalPage);
    const [preIsActive, setPreIsAcitve] = useState(pagination.currentPage <= 1);

    if (pagination.pageData == null) {
        return null;
    }
    
    return (
        <PagerContainer>
            <PaginationContainer 
                defaultCurrent={1} 
                pageSize={pagination.paginationLimit} 
                total={pagination.paginationTotalResult} 
                current={pagination.currentPage} 
                showSizeChanger={false}
                onChange={(page, pageSize) => {
                    fetchMore({
                        variables: {
                            page: parseInt(page),
                            limit: parseInt(pagination.paginationLimit),
                            filter: pagination.filter
                        },
                        updateQuery: (prev, { fetchMoreResult }) => {
                            if (!fetchMoreResult) return prev;
                            
                            dispatch(updatePaginationLoading(false));
                            dispatch(changeCurrentPage(page));
                            dispatch(updatePageData(fetchMoreResult));
                            dispatch(updateTotalResult(fetchMoreResult.data.info.count));
                            dispatch(updateTotalPage(fetchMoreResult.data.info.pages));
                            
                            return fetchMoreResult;
                        }
                    });
                }}
            />
            <PagerButtonContainer>
                <Button 
                    className="pre"
                    type="text"
                    disabled={preIsActive}
                    onClick={() => {
                        if (preIsActive) {
                            return;
                        }

                        dispatch(previousPage());

                        fetchMore({
                            variables: {
                                page: parseInt(pagination.currentPage),
                                limit: parseInt(pagination.paginationLimit),
                                filter: pagination.filter
                            },
                            updateQuery: (prev, { fetchMoreResult }) => {
                                if (!fetchMoreResult) return prev;
                                
                                dispatch(updatePaginationLoading(false));
                                dispatch(updatePageData(fetchMoreResult));
                                dispatch(updateTotalResult(fetchMoreResult.data.info.count));
                                dispatch(updateTotalPage(fetchMoreResult.data.info.pages));
                                setPreIsAcitve(pagination.currentPage > 2);

                                return fetchMoreResult;
                            }
                        });
                    }}
                >
                    <PreviousArrow />
                </Button>
                <Button 
                    className="next" 
                    type="text"
                    disabled={nextIsActive}
                    onClick={() => {
                        if (nextIsActive) {
                            return;
                        }

                        dispatch(nextPage());

                        fetchMore({
                            variables: {
                                page: parseInt(pagination.currentPage),
                                limit: parseInt(pagination.paginationLimit),
                                filter: pagination.filter
                            },
                            updateQuery: (prev, { fetchMoreResult }) => {
                                if (!fetchMoreResult) return prev;
                                
                                dispatch(updatePaginationLoading(false));
                                dispatch(updatePageData(fetchMoreResult));
                                dispatch(updateTotalResult(fetchMoreResult.data.info.count));
                                dispatch(updateTotalPage(fetchMoreResult.data.info.pages));
                                setNextIsAcitve(pagination.currentPage + 1 > pagination.totalPage);
                                
                                return fetchMoreResult;
                            }
                        });
                    }}
                >
                    <NextArrow />
                </Button>
            </PagerButtonContainer>
        </PagerContainer>
    )
}

export default PaginationPager;