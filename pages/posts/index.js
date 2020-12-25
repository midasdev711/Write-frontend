import React, { useState, useEffect, useMemo } from 'react';
import Head from 'next/head'
import { PanelLayout } from "@layouts";
import { useSelector } from 'react-redux'
import Table from '@components/table';
import columns from "@components/pages/posts/table";
import Pagination from "@components/pagination";
import Header from "@components/pages/posts/header";
import { useDispatch } from 'react-redux';
import { getAllPost } from "@graphql";
import {
  updatePageData,
  updatePaginationLoading,
  updateTotalResult,
  updateTotalPage,
  updatePaginationFilter,
  restPagination
} from '@actions';
import Router from 'next/router';
// import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

const RenderTable = ({ state, data, loading, error }) => {
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  if (state.pagination.loading) return "Loading........!";

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      // Column configuration not to be checked
      id: record.id,
    }),
  };


  return <Table
    rowSelection={{
      type: "checkbox",
      ...rowSelection,
    }}
    columns={columns}
    dataSource={data.data.result}
    rowsKey="_id"
    pagination={false}
  />
}

function Posts({}) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  React.useEffect(() => {
    const doMagic = () => {
      dispatch(restPagination());
    }

    dispatch(updatePaginationFilter({
      status: "draft"
    }));

    Router.events.on('routeChangeStart', doMagic); // add listener

    return () => {
      Router.events.off('routeChangeStart', doMagic); // remove listener
    }
  }, []);

  const { loading, error, data, fetchMore } = useQuery(getAllPost, {
    variables: {
      page: state.pagination.currentPage,
      limit: state.pagination.paginationLimit,
      filter: state.pagination.filter
    },
    onCompleted: (data) => {
      dispatch(updatePaginationLoading(false));
      dispatch(updatePageData(data));

      if (data.data !== null) {
        dispatch(updateTotalResult(data.data.info.count));
        dispatch(updateTotalPage(data.data.info.pages));
      }
    }
  });

  return (
    <PanelLayout
      header={
        <Header title="Posts" fetchMore={fetchMore} />
      }
      footer={
        <Pagination fetchMore={fetchMore} />
      }
    >
      <Head>
        <title>Posts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RenderTable
        state={state}
        data={data}
        loading={loading}
        error={error}
      />
    </PanelLayout>
  )
}

export default Posts;
