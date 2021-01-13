import React, { useState } from "react";
import styled from "styled-components";
import { Progress } from 'antd';
import { ColorSchema } from "@/config";

const NewProgress = styled(Progress)`
    .ant-progress-outer {
        padding: 0;
        margin: 0;
        width: 70px;
        .ant-progress-inner {
            border-radius: 0;
            .ant-progress-bg {
                height: 25px!important;
                border-radius: 0;
                background-color: ${ColorSchema.light.primary};
            }
        }
    }
    .ant-progress-text {
        position: absolute;
        width: 70px;
        left: 0;
        top: 5px;
        text-align: center;
        margin: 0;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: ${ColorSchema.light.dark1};
    }
`;

const ProgressStat = (props) => {

    return (
        <NewProgress percent={props.percent} />
    );
}

export default ProgressStat;
