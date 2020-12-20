import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 50px;
    height: 100vh;
    background: #FFD100;
`;

const Sidebar = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

export default Sidebar;