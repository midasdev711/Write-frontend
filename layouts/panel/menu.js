import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Menu } from "antd";
import {
  DissectIcon,
  DashboardIcon,
  OverviewIcon,
  ReplayIcon,
  HeatmapIcon,
  FunnelIcon
} from "@components/icons";
import MenuItem from "@components/menuItem";
import { ReactSVG } from 'react-svg'
const Container = styled.div`
  #sidebar-menu {
    background: transparent;
    border: none;
    
    #dissect {
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      a {
        display: contents;
      }

      &:hover {
        svg {
          background: none;
          border-radius: 0
        }
      }

      &.active-menu-item {
        a {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;

          &:before {
            content: "";
            width: 3px;
            height: 100%;
            background: transparent;
            border-radius: 0;
          }
        }
      }

    }

    li {
      text-align: center;
      padding: 0;
      margin-bottom: 20px;
      margin-top: 0;

      &:active, &.ant-menu-item-selected {
        background: transparent;
      }
      &.active-menu-item {
        a {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;

          &:before {
            content: "";
            width: 3px;
            height: 100%;
            background: #fff;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
          }
        }
        svg {
          path {
            fill-opacity: 1
          }
        }
      }
      &:hover {
        svg {
          background: hsl(0deg 0% 100% / 30%);
          border-radius: 6px;
          max-width: 30px;
          max-height: 30px;
        }
      }
    }

    #posts-menu-item {
      margin-top: 40px;
    }
  }
`;
const SidebarMenu = () => {
  return (
    <Container>
      <Menu id="sidebar-menu" mode="vertical">
        <MenuItem id="dissect">
          <Link href="/" as="/">
            <a>
              <ReactSVG src="/logo.svg" />
            </a>
          </Link>
        </MenuItem>
        <MenuItem name="dashboard">
          <Link href="/dashboard" as="/dashboard">
            <a>
              <DashboardIcon />
            </a>
          </Link>
        </MenuItem>
        <MenuItem name="overview">
          <Link href="/overview" as="/overview">
            <a>
              <OverviewIcon />
            </a>
          </Link>
        </MenuItem>
        <MenuItem name="posts" id="posts-menu-item">
          <Link href="/posts" as="/posts">
            <a>
              <ReplayIcon />
            </a>
          </Link>
        </MenuItem>
        <MenuItem name="heatmaps">
          <Link href="/heatmaps" as="/heatmaps">
            <a>
              <HeatmapIcon />
            </a>
          </Link>
        </MenuItem>
        <MenuItem name="funnels">
          <Link href="/funnels" as="/funnels">
            <a>
              <FunnelIcon />
            </a>
          </Link>
        </MenuItem>
      </Menu>
    </Container>
  );
}

export default SidebarMenu;

