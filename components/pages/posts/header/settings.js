import React from "react";
import { ReactSVG } from 'react-svg';
import { Button } from "antd";
import styled from "styled-components";

const SettingsContainer = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
`;
const Settings = () => {
    return (
        <SettingsContainer type="text">
            <ReactSVG src="/icons/settings.svg" />
        </SettingsContainer>
    )
}

export default Settings;