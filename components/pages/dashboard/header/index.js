import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from 'next/router';
import Status from "./status";
import AddPost from "./addPost";

const HeaderContainer = styled.div`
    height: 48px;
    width: 100%;
`;
const NavbarContainer = styled.div`
    background: #fff;
    height: 48px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: inset 0px -1px 0px #F0EFE9;
    border-radius: 10px 10px 0px 0px;

    .left-side, .right-side {
        display: flex;
        flex-direction: row;
        height: 48px;
    }

    .page-title {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 16px;
        font-weight: 600;
        font-size: 20px;
        line-height: 16px;
    }
`;

const Header = ({ title, fetchMore }) => {
    const router = useRouter();

    return (
        <HeaderContainer>
            <NavbarContainer>
                <div className="left-side">
                    <div className="page-title">{title}</div>
                    <Status fetchMore={fetchMore} />
                </div>
                <div className="right-side">
                    <AddPost />
                </div>
            </NavbarContainer>
        </HeaderContainer >
    );
}

export default Header;