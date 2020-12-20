import React from "react";
import { Tooltip } from "antd";
import { ReactSVG } from 'react-svg'
import PropTypes from 'prop-types';

const Browser = ({ name, version }) => {
    const text = `${name} ${version}`;

    return (
        <Tooltip title={text} color="white">
            <ReactSVG
                beforeInjection={(svg) => {
                    svg.classList.add('browser-icon')
                    svg.setAttribute('style', 'width: 16px;height: 16px;')
                }}
                src={`/icons/${name}.svg`}
            />
        </Tooltip>
    )
}

Browser.defaultProps = {
    name: "",
    version: ""
};

Browser.prototype = {
    name: PropTypes.string,
    version: PropTypes.string
};

export default Browser;