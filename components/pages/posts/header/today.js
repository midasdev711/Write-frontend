import React from "react";
import { DatePicker } from 'antd';
import styled from "styled-components";
import { DownArrow } from "@components/icons";

const DatePickerContainer = styled(DatePicker)`
    height: 100%;

    input {
        text-align: center;
        ::-webkit-input-placeholder {color: #000;} /* Chrome/Opera/Safari */
        ::-moz-placeholder { color: #000;} /* Firefox 19+ */
        :-ms-input-placeholder { color: #000;} /* IE 10+ */
        :-moz-placeholder {color: #000;}  /* Firefox 18- */
    }
`;

const Today = () => {
    return (
        <DatePickerContainer
            bordered={false}
            suffixIcon={<DownArrow />}
            placeholder="Today"
        />
    )
}

export default Today;