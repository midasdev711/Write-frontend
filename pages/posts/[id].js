import React, { useState, useEffect } from "react";
import Head from "next/head";
import { PanelLayout } from "@layouts";
import Pagination from "@components/pagination";
import Header from "@components/pages/posts/header";
import dynamic from "next/dynamic";
import styled from "styled-components";
const Editor1 = dynamic(() => import('../../components/editor'), {
    ssr: false
});
import { useDispatch } from 'react-redux';
import { getPostById, updatePost } from "@graphql";
import {
    updatePageData,
    updatePaginationLoading,
    updateTotalResult,
    updateTotalPage,
    restPagination
} from '@actions';
import { useQuery, useMutation } from '@apollo/client';
import { useRouter } from 'next/router'
import { Input } from 'antd';

const EditorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;

    #editor-container {
        width: 731px;

        #title {
            color: #404950;
            font-weight: 700;
            font-size: 30px;
            border: none;
            background: transparent;

            &:focus {
                box-shadow: none;
            }
        }
    }
`;

function Editor() {
    const [updateThisPost] = useMutation(updatePost);
    const router = useRouter();
    
    // const { loading, error, data } = useQuery(getPostById, {
    //     variables: {
    //         id: router.query
    //     },
    //     onCompleted: (data) => {
    //         console.log(data.getPostById);
    //     }
    // });

    return (
        <PanelLayout>
            <Head>
                <title>Editor</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <EditorContainer>
                <div id="editor-container">
                    <Input id="title" placeholder="Title" onBlur={(e) => {
                        updateThisPost({
                            variables: {
                              _id: router.query.id,
                              title: e.target.value
                            }
                        });
                    }} />
                    <Editor1 />
                </div>
            </EditorContainer>


        </PanelLayout>
    );
}

export default Editor;