import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from 'next/router';
import { ColorSchema } from "@/config";

const NewTab = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    height: 80px;
    justify-content: space-between;

    .tab-label__first {
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 25px;
        color: ${ColorSchema.light.dark1};
        margin-bottom: 10px;
    }

    .tab-label__second {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: ${ColorSchema.light.dark1};
    }
`;

const DashboardStat = (props) => {
    const router = useRouter();

    return (
        <NewTab>
            <span className="tab-label__first">{props.title}</span>
            <span className="tab-label__second">{props.subtitle}</span>
        </NewTab>
    );
}

export default DashboardStat;