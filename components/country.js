import React from "react";
import { Tooltip } from "antd";
import { ReactSVG } from 'react-svg'
import PropTypes from 'prop-types';

const Country = ({ name }) => {
    return (
        <Tooltip title={name} color="white">
            <ReactSVG
                beforeInjection={(svg) => {
                    svg.classList.add('country-flag')
                    svg.setAttribute('style', 'width: 16px;height: 16px;')
                }}
                src={`/icons/flags/${name}.svg`}
            />
        </Tooltip>
    )
}

Country.defaultProps = {
    name: ""
};

Country.prototype = {
    name: PropTypes.string
};

export default Country;