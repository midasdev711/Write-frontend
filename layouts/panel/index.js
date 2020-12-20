import React from 'react';
import styled from 'styled-components';
import Sidebar from "@components/sidebar";
import { Layout } from "antd";
import PropTypes from 'prop-types';
import SidebarMenu from "./menu";
const { Header, Footer, Content } = Layout;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  #header {
    background: transparent;
    padding: 0;
    height: auto;
  }
  
  #footer {
    padding: 0;
  }
`;
export default function PanelLayout({ children, header, footer }) {
  return (
    <Container>
      <Sidebar>
        <SidebarMenu />
      </Sidebar>

      <Layout>
        <Header id="header">
          {header}
        </Header>

        <Content>
          {children}
        </Content>

        <Footer id="footer">
          {footer}
        </Footer>
      </Layout>

      <Sidebar />
    </Container>
  );
}

PanelLayout.defaultProps = {
  header: null,
  footer: null
}

PanelLayout.prototype = {
  header: PropTypes.object,
  footer: PropTypes.object
}