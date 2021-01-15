import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from 'next/router';
import { Tag, Input, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { ColorSchema } from "@/config";

const InputTag = styled(Tag)`
    width: 41px;
    height: 35px;
    border: 1px dashed rgba(20, 16, 0, 0.8);
    border-radius: 5px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
`

const NewTag = styled(Tag)`
    height: 35px;
    background: rgba(255, 209, 0, 0.2);
    border-radius: 5px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: ${ColorSchema.light.dark1};
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 5px;
`

const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const TagInput = (props) => {
    const router = useRouter();

    console.log(ColorSchema)

    const [tags, setTags] = useState([]);
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [editInputIndex, setEditInputIndex] = useState(-1);
    const [editInputValue, setEditInputValue] = useState('');
    const [input, setInput] = useState();
    const [editInput, setEditInput] = useState();

    useEffect(() => {
        if (input && inputVisible) {
            input.focus()
        }
    }, [inputVisible]);

    const handleClose = removedTag => {
        console.log(tags, removedTag)
        const newTags = tags.filter(tag => tag !== removedTag);
        console.log(newTags);
        setTags(newTags);
    };

    const showInput = () => {
        setInputVisible(true);
    };

    const handleInputChange = e => {
        setInputValue(e.target.value);
    };

    const handleInputConfirm = () => {
        var newTags = Object.assign([], tags);
        if (inputValue && tags.indexOf(inputValue) === -1) {
            newTags = [...tags, inputValue];
        }
        setTags(newTags);
        setInputValue('');
        setInputVisible(false);
    };

    const handleEditInputChange = e => {
        setEditInputValue(e.target.value);
    };

    const handleEditInputConfirm = () => {
        const newTags = [...tags];
        newTags[editInputIndex] = editInputValue;
        setTags(newTags);
        setEditInputIndex(-1);
        setEditInputValue('');
    };

    const saveInputRef = input => {
        setInput(input);
    };

    const saveEditInputRef = input => {
        setEditInput(input);
    };

    return (
        <TagContainer>
            {inputVisible && (
                <Input
                    ref={saveInputRef}
                    type="text"
                    className="tag-input"
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                />
            )}
            {!inputVisible && (
                <InputTag className="site-tag-plus" onClick={showInput}>
                    <PlusOutlined />
                </InputTag>
            )}
            {tags.map((tag, index) => {
                if (editInputIndex === index) {
                    return (
                        <Input
                            ref={saveEditInputRef}
                            key={tag}
                            size="small"
                            className="tag-input"
                            value={editInputValue}
                            onChange={handleEditInputChange}
                            onBlur={handleEditInputConfirm}
                            onPressEnter={handleEditInputConfirm}
                        />
                    );
                }

                const isLongTag = tag.length > 20;

                const tagElem = (
                    <NewTag
                        className="edit-tag"
                        key={tag}
                        closable={true}
                        onClose={() => handleClose(tag)}
                    >
                        <span
                            onDoubleClick={e => {
                                if (index !== 0) {
                                    this.setState({ editInputIndex: index, editInputValue: tag }, () => {
                                        this.editInput.focus();
                                    });
                                    e.preventDefault();
                                }
                            }}
                        >
                            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                        </span>
                    </NewTag>
                );
                return isLongTag ? (
                    <Tooltip title={tag} key={tag}>
                        {tagElem}
                    </Tooltip>
                ) : (
                        tagElem
                    );
            })}
            
        </TagContainer>
    );
}

export default TagInput;
