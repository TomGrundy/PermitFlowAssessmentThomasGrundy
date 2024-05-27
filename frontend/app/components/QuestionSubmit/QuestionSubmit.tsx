'use client';

import { IOutcomeResponse } from "@/app/requests/getQuestionGroup";
import { OutcomeRequest, postOutcomes } from "@/app/requests/postOutcomes";
import { Dispatch, FC, SetStateAction } from "react";
import { StyledQuestionSubmit } from "./QuestionSubmit.styles";

interface IQuestionSubmitProps {
    isTerminal: boolean,
    name: string | undefined,
    outcome: IOutcomeResponse | undefined,
    selectedOutcomes: OutcomeRequest | undefined, 
    setIsDisabled: Dispatch<SetStateAction<boolean>>,
    setQuestionGroupId: Dispatch<SetStateAction<string>>,
    setFinalStrings: Dispatch<SetStateAction<Array<string>>>
};

export const QuestionSubmit: FC<IQuestionSubmitProps> = ({ 
    isTerminal = false, 
    name = '', 
    outcome, 
    selectedOutcomes, 
    setIsDisabled, 
    setQuestionGroupId, 
    setFinalStrings
}) => {
    const onSubmit = async () => {
        setIsDisabled(true);
        if (isTerminal) {
            try {
                await postOutcomes({ ...selectedOutcomes, name });
                setFinalStrings(outcome?.strings ?? []);
                setIsDisabled(false);
            } catch (error) {
                console.log(error);
                setIsDisabled(false);
            }        
        } else {
            if (outcome?.nextQuestionGroupId) {
                setQuestionGroupId(outcome.nextQuestionGroupId);
            }
            setIsDisabled(false); 
        }
    };


    return (
        <StyledQuestionSubmit $isDisabled={!outcome} onClick={onSubmit}>
            Submit
        </StyledQuestionSubmit>
    );
};