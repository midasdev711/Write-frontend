import React from "react";
import PropTypes from 'prop-types';
import Browser from "./browser";
import Platform from "./platform";
import OS from "./os";
import Country from "./country";
import styled from "styled-components";

const DeviceContainer = styled.div`
    display: flex;
    justify-content: center;

    div {
        margin: 0 8px;
        width: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
const Devices = ({
    browserName,
    browserVersion,
    platformName,
    platformResolution,
    osName,
    osVersion,
    country
}) => {
    return (
        <DeviceContainer>
            <Browser name={browserName} version={browserVersion} />
            <Platform name={platformName} resolution={platformResolution} />
            <OS name={osName} version={osVersion} />
            <Country name={country} />
        </DeviceContainer>
    )
}

Devices.defaultProps = {
    browserName: "",
    browserVersion: "",
    platformName: "",
    platformResolution: "",
    osName: "",
    osVersion: "",
    country: "",
};

Devices.prototype = {
    browserName: PropTypes.string,
    browserVersion: PropTypes.string,
    platformName: PropTypes.string,
    platformResolution: PropTypes.string,
    osName: PropTypes.string,
    osVersion: PropTypes.string,
    country: PropTypes.string,
};

export default Devices;