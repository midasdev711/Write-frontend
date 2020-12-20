import React from "react";
import { Tooltip } from "antd";
import { ReactSVG } from 'react-svg'
import PropTypes from 'prop-types';

const Platform = ({ name, resolution }) => {
    const text = `${name} ${resolution}`;
    return (
        <Tooltip title={text} color="white">
            <ReactSVG
                beforeInjection={(svg) => {
                    svg.classList.add('platform-icon')
                    svg.setAttribute('style', 'width: 16px;height: 16px;')
                }}
                src={`/icons/${name}.svg`}
            />
        </Tooltip>
    )
}

Platform.defaultProps = {
    name: "",
    resolution: ""
};

Platform.prototype = {
    name: PropTypes.string,
    resolution: PropTypes.string
};

export default Platform;