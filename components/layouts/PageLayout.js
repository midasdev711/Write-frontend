import React, { useState, useEffect, useMemo } from 'react';
import Head from 'next/head'
import { PanelLayout } from "@layouts";
import { useSelector, useDispatch } from 'react-redux'
import Router from 'next/router';
import styled from "styled-components";

function PageLayout(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  return (
    <PanelLayout
      header={props.header}
      pageTitle={props.pagetitle}
    >
      {props.content}
    </PanelLayout>
  )
}

export default PageLayout;
