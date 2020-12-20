import React from "react";
import { Tooltip } from "antd";
import { ReactSVG } from 'react-svg'
import PropTypes from 'prop-types';

const OS = ({ name, version }) => {
    const text = `${name} ${version}`;

    return (
        <Tooltip title={text} color="white">
            <ReactSVG
                beforeInjection={(svg) => {
                    svg.classList.add('os-icon')
                    svg.setAttribute('style', 'width: 16px;height: 16px;')
                }}
                src={`/icons/${name}.svg`}
            />
        </Tooltip>
    )
}

OS.defaultProps = {
    name: "",
    version: ""
};

OS.prototype = {
    name: PropTypes.string,
    version: PropTypes.string
};

export default OS;