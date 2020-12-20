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
    width: 107px;
    height: 48px;
    color: #1F232E;
    font-weight: 600;
    background: #FDDB2A;

    span {
        margin-right: 10px;
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