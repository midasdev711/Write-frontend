import React from "react";
import styled from "styled-components";
import { useSelector } from 'react-redux';

const Container = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-right: 1px solid #ddd;
`;
const PaginationResult = () => {
    const { pagination } = useSelector((state) => state);
    const start = (pagination.currentPage * pagination.paginationLimit) - pagination.paginationLimit + 1;
    const end = pagination.currentPage * pagination.paginationLimit;
    return (
        <Container>
          {start}-{end} of {pagination.paginationTotalResult} results
        </Container>
    )
}

export default PaginationResult;