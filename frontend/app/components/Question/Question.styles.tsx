import styled from "styled-components";
import { BG_COLOR_SECONDARY, SUBHEAD_COLOR_LIGHT } from "../constants/styleConstants";

export const StyledQuestion = styled.div`
    background-color: ${BG_COLOR_SECONDARY};
    border-radius: 10px;
    margin: 10px 0;
    padding: 16px;
`;

export const StyledQuestionLabel = styled.label`
    color: ${SUBHEAD_COLOR_LIGHT};
    display: inline-block;
    font-size: 18px;
    min-width: 210px;
    margin-right: 10px;
`;

export const StyledQuestionRadio = styled.input`
`;

export const StyledQuestionCheckbox = styled.input`
`;