import React from "react";
import { Dropdown } from 'antd';
import styled from "styled-components";
import { UpArrow, DownArrow } from "@components/icons";
import { Button } from 'antd';

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

    svg {
        margin-right: 18px
    }
`;

const DropdownWrapper = ({ children, overlay, trigger, placement, arrow }) => {
    const RenderArrow = () => {
        if (arrow == "up") {
            return <UpArrow />
        } else if (arrow == "down") {
            return <DownArrow />
        } else {
            return null;
        }
    }
    
    return (
        <DropdownContainer overlay={overlay} trigger={trigger} placement={placement}>
            <Button type="text">
                <div>
                    {children}
                </div>
                <RenderArrow />
            </Button>
        </DropdownContainer>
    )
}

DropdownWrapper.defaultProps = {
    arrow: "down"
};

export default DropdownWrapper;