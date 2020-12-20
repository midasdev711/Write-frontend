import React, { useState } from "react";
import styled from "styled-components";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Today from "./today";
import Status from "./status";
import Search from "./search";
import Settings from "./settings";
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
    }
`;

const Header = ({ title, fetchMore }) => {
    const router = useRouter();

    return (
        <HeaderContainer>
            <NavbarContainer>
                <div className="left-side">
                    <div className="page-title">{title}</div>
                    <Today />
                    <Status fetchMore={fetchMore} />
                </div>
                <div className="right-side">
                    <Search />
                    <Settings />
                    <AddPost />
                </div>
            </NavbarContainer>
        </HeaderContainer >
    );
}

export default Header;