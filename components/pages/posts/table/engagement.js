import React from "react";
import { Tooltip } from "antd";
import { ReactSVG } from 'react-svg'
import styled from "styled-components";

const TooltipContainer = styled(Tooltip)`
    display: flex;
    justify-content: center;

    div {
        margin: 0 1px
    }
`;
const Session = ({ text }) => {
    return (
        <TooltipContainer title={text} color="white">
            <ReactSVG src="/icons/dot-orange.svg" />
            <ReactSVG src="/icons/dot-orange.svg" />
            <ReactSVG src="/icons/dot-orange.svg" />
        </TooltipContainer>
    )
}

export default Session;