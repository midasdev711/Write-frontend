import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from 'next/router';
import { Select } from 'antd';
import { ColorSchema } from "@/config";

const { Option } = Select;

const NewSelect = styled(Select)`
    height: 35px;
    .ant-select-selector {
        height: 35px!important;
        background-color: rgba(20, 16, 0, 0.05)!important;
        border: none!important;
        border-radius: 5px!important;
        padding-left: 10px!important;
        padding-right: 10px!important;
        .ant-select-selection-item {
            line-height: 35px;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
        }
        color: ${ColorSchema.light.dark1};
    }
`;

const Dropdown = (props) => {
    const router = useRouter();

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    return (
        <NewSelect defaultValue={0} onChange={handleChange} style={props.style}>
            { props.data.map((item, index) => 
                <Option value={index} key={index}>{ item }</Option>
            )}
        </NewSelect>
    );
}

export default Dropdown;
