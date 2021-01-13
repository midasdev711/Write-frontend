import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from 'next/router';
import { Table } from 'antd';
import { ColorSchema } from "@/config";

const NewTable = styled(Table)`
    .ant-table-thead {
        th {
            height: 48px;
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 16px;
            color: ${ColorSchema.light.dark1};
            background: transparent;
            padding: 16px;
            border: none;
            &:last-child {
                padding-right: 3px;
            }
        }
    }

    .ant-table-tbody {
        td {
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            color: ${ColorSchema.light.dark1};
            padding: 0 16px;
            height: 48px;
            border: none;
            .link {
                color: ${ColorSchema.light.dark1};
            }
            &:last-child {
                padding-right: 3px;
            }
        }
    }
`;

const AdvancedTable = (props) => {
    const router = useRouter();

    return (
        <NewTable columns={ props.columns } dataSource={ props.dataSource } pagination={ props.pagination } showHeader={ props.showHeader } />
    );
}

export default AdvancedTable;
