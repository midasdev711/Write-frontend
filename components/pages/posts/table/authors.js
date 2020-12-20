import React from "react";
import { Tooltip } from "antd";
import { ReactSVG } from 'react-svg'
import styled from "styled-components";

const AuthorsContainer = styled.div`
    display: flex;
    justify-content: center;
`;
const Session = ({ text }) => {
    return (
        <AuthorsContainer title={text} color="white">
            <ReactSVG src="/icons/user1.svg" />
            <ReactSVG src="/icons/user1.svg" />
            <ReactSVG src="/icons/user1.svg" />
        </AuthorsContainer>
    )
}

export default Session;