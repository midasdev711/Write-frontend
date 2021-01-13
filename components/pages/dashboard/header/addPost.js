import React from "react";
import { ReactSVG } from 'react-svg';
import { Button } from "antd";
import styled from "styled-components";
import { addPost } from "@graphql";
import { useMutation } from '@apollo/client';
import Router from 'next/router'

const AddPostButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 48px;
    color: #1F232E;
    font-weight: 600;
    background: #F3F3F2;
    border-top-right-radius: 10px;

    span {
        margin-right: 10px;
        font-size: 14px;
        line-height: 16px;
    }

    div {
        height: 16px;
    }

    &:hover {
        color: #1F232E;
        background: #FDDB2A;
    }
`;

const AddSegment = () => {
    const [addNewPost, { data }] = useMutation(addPost, {
        onCompleted: (data)=> {
            Router.push(`/posts/${data.post._id}`);
        }
    });

    return (
        <AddPostButton
            type="text"
            onClick={() => {
                addNewPost({
                    variables: {
                        slug: "post-" + new Date().getTime()
                    }
                });
            }}
        >
            New post
            <ReactSVG src="/icons/plus-black.svg" />
        </AddPostButton>
    )
}

export default AddSegment;