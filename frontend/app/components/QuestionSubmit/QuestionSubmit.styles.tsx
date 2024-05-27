import styled from "styled-components";
import { SUBHEAD_COLOR_LIGHT } from "../constants/styleConstants";

export const StyledQuestionSubmit = styled.button<{$isDisabled: boolean}>`
    background-color: ${({$isDisabled}) => $isDisabled ? 'darkgrey' : SUBHEAD_COLOR_LIGHT};
    border-radius: 5px;
    color: ${({$isDisabled}) => $isDisabled ? 'grey' : 'black'};
    cursor: ${({$isDisabled}) => $isDisabled ? 'not-allowed' : 'pointer'};
    display: block;
    font-size: 20px;
    margin: 18px auto 0 auto;
    padding: 4px 10px;
    width: 50%;
`;