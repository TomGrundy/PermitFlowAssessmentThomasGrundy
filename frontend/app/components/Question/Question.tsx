'use client';

import { IQuestionResponse } from "@/app/requests/getQuestionGroup";
import { OutcomeRequest } from "@/app/requests/postOutcomes";
import { Dispatch, FC, SetStateAction } from "react";
import { StyledQuestion, StyledQuestionCheckbox, StyledQuestionLabel, StyledQuestionRadio } from "./Question.styles";

interface IQuestionProps {
    selectedOutcomes: OutcomeRequest | undefined,
    question: IQuestionResponse | undefined, 
    setSelectedOutcomes: Dispatch<SetStateAction<OutcomeRequest>>,
};

export const Question: FC<IQuestionProps> = ({question, selectedOutcomes, setSelectedOutcomes}) => {
    const wrappedSetSelected = () => {
        setSelectedOutcomes((state) => {
            let newState = {...state};
            if (question?._id) {
                if (question?.type === 'radio') {
                    newState = {};
                    newState[question._id] = question?.outcomeId['_id'];
                } else if (state[question._id]) {
                    delete newState[question._id];
                } else {
                    newState[question._id] = question?.outcomeId['_id'];
                }
            }
            return newState;
        });
    };

    const isChecked = Boolean(question?._id && selectedOutcomes && selectedOutcomes?.[question?._id]);
    return (
        <StyledQuestion>
            <StyledQuestionLabel htmlFor={question?._id}>
                {question?.title}
            </StyledQuestionLabel>
            {/* As more controls come in this should be abstracted into some exhaustive switch, but for now this is fine,
                since premature optimization is A Bad Thing™️ */
           question?.type === 'radio' ? (
                <StyledQuestionRadio
                    checked={isChecked} 
                    id={question?._id} 
                    type='radio'
                    onChange={wrappedSetSelected}
                    value={question?._id}
                />
            ) : (
                <StyledQuestionCheckbox 
                    checked={isChecked}
                    id={question?._id} 
                    type='checkbox'
                    onChange={wrappedSetSelected}
                    value={question?._id}
                />
            )}
        </StyledQuestion>
    );
};