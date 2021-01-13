import React, { useState } from "react";
import { Button } from 'antd';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import {
    updatePageData,
    updatePaginationLoading,
    updateTotalResult,
    updateTotalPage,
    updatePaginationFilter
  } from '@actions';

const StatusContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 

    button {
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        font-size: 14px;
        line-height: 16px;
    }

    .active-status {
        border-bottom: 3px solid #000;
        font-weight: 600
    }

    .status-label {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 16px;
        font-weight: 600;
    }
`;

const RenderStatusButton = ({ status, currentStatus, fetchMore, pagination, dispatch }) => {
    return status.map(item => {
        return (
            <Button
                key={item}
                type="text"
                className={currentStatus === item.toString().toLowerCase() ? "active-status" : ""}
                onClick={() => { 
                    const status = item.toString().toLowerCase();
                    dispatch(updatePaginationFilter({
                        status
                    }))

                    // fetchMore({
                    //     variables: {
                    //         page: parseInt(pagination.currentPage),
                    //         limit: parseInt(pagination.paginationLimit),
                    //         filter: {
                    //             status
                    //         }
                    //     },
                    //     updateQuery: (prev, { fetchMoreResult }) => {
                    //         if (!fetchMoreResult) return prev;
    
                    //         dispatch(updatePaginationLoading(false));
                    //         dispatch(updatePageData(fetchMoreResult));
                    //         dispatch(updateTotalResult(fetchMoreResult.data.info.count));
                    //         dispatch(updateTotalPage(fetchMoreResult.data.info.pages));
    
                    //         return fetchMoreResult;
                    //     }
                    // });
                }}
            >
                {item}
            </Button>
        )
    })
}

const Status = ({ fetchMore }) => {
    const dispatch = useDispatch();
    const { pagination } = useSelector((state) => state);
    
    const [status, addStatus] = useState([
        "Overview",
        "Content",
        "Authors"
    ]);

    return (
        <StatusContainer>
            <RenderStatusButton
                currentStatus={pagination.filter.status}
                status={status}
                fetchMore={fetchMore}
                pagination={pagination}
                dispatch={dispatch}
            />
        </StatusContainer>
    )
}

export default Status;