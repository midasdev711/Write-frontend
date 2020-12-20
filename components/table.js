import { Table } from 'antd';
import styled from "styled-components";

const TableContainer = styled(Table)`
    thead {
        th {
            background: #E4EAEE;
            color: #788995;
            font-size: 12px;
            font-family: ProximaNova;
            height: 48px;
            padding: 12px 16px;
        }
    }
    tbody {
        tr {
            td {
                padding: 8px 16px;

                svg {
                    display: flex;
                    align-items: center;
                }
            }
        }
    }
`;

export default TableContainer;