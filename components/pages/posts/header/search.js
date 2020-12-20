import React from "react";
import { ReactSVG } from 'react-svg';
import { Button } from "antd";
import styled from "styled-components";

const SearchContainer = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
`;
const Search = () => {
    return (
        <SearchContainer type="text">
            <ReactSVG src="/icons/search.svg" />
        </SearchContainer>
    )
}

export default Search;