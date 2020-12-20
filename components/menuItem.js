import React from "react";
import { Menu } from "antd";
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const MenuItem = (props) => {
    const router = useRouter();
    
    return <Menu.Item 
            title={props.children} 
            {...props} 
            className={router.pathname.includes(`/${props.name}`) ? "active-menu-item" : ""} 
        />;
}

MenuItem.defaultProps = {
    name: ""
};

MenuItem.prototype = {
    name: PropTypes.string
};

export default MenuItem;