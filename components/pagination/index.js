import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import PaginationLimit from "./limit";
import PaginationResult from "./result";
import Pager from "./pager";

const Container = styled.div`
    width: 100%;
    height: 48px;
    background: #fff;
    display: flex;
    justify-content: space-between;

    #left-side, #right-side {
        display: flex;
        justify-content: center;
        align-content: center;
    }
`;

const Pagination = ({ fetchMore }) => {
    return (
        <Container>
            <div id="left-side">
                <PaginationLimit fetchMore={fetchMore} />
                <PaginationResult />
            </div>
            <div id="right-side">
                <Pager fetchMore={fetchMore} />
            </div>
        </Container>
    )
}

export default Pagination;