import React, { useState } from "react";
import styled from "styled-components";
import { Switch } from 'antd';
import { ColorSchema } from "@/config";

const NewSwitch = styled.div`
    .ant-switch {
        min-width: 36px;
        height: 20px;
        .ant-switch-handle {
            top: 1px;
            // left: 2px;
            width: 17px;
            height: 17px;
        }
    }
    .ant-switch-checked {
        background-color: ${ColorSchema.light.primary};
        .ant-switch-handle {
            left: calc(100% - 17px - 1px);
        }
    }
`;

const CustomSwitch = (props) => {

    return (
        <NewSwitch>
            <Switch defaultChecked onChange={props.onChange} />
        </NewSwitch>
        );
}

export default CustomSwitch;
