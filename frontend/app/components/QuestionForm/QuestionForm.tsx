'use client';

import { OutcomeRequest } from "@/app/requests/postOutcomes";
import { FC, useEffect, useState } from "react";
import { IOutcomeResponse, IQuestionGroupResponse, getQuestionGroup } from "../../requests/getQuestionGroup";
import { FinalStringsSection } from "../FinalStringsSection/FinalStringsSection";
import { NameInput } from "../NameInput/NameInput";
import { Question } from "../Question/Question";
import { QuestionSubmit } from "../QuestionSubmit/QuestionSubmit";
import { StyledQuestionForm, StyledSectionTitle } from "./QuestionForm.styles";

export const QuestionForm : FC = () => {
    const [questionGroupId, setQuestionGroupId] = useState<string>('');
    const [questionGroup, setQuestionGroup] = useState<IQuestionGroupResponse | undefined>(undefined);
    const [selectedOutcomes, setSelectedOutcomes] = useState<OutcomeRequest>({});
    const [name, setName] = useState<string>('');
    const [outcome, setOutcome] = useState<IOutcomeResponse | undefined>(undefined);
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    const [finalStrings, setFinalStrings] = useState<Array<string>>([]);

    useEffect(() => {
        (async () => {
            setIsDisabled(true);
            const data = await getQuestionGroup(questionGroupId);
            setQuestionGroup(data);
            setIsDisabled(false);
         })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [questionGroupId]);

    // Determine the outcome from the current set of selectedOutcomes
    useEffect(() => {
        questionGroup?.questionLogicOrder.forEach((questionId) => {
            if (selectedOutcomes[questionId]) {
                setOutcome(questionGroup?.questions?.[questionId]?.outcomeId);
            }
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedOutcomes])
    
    const questionIdArr = (questionGroup?.questionOrder ?? []);
    const isTerminal = !questionIdArr.some((id) => questionGroup?.questions?.[id]?.outcomeId?.nextQuestionGroupId !== undefined);
    return (
        <>
            {finalStrings.length  ? (
                <FinalStringsSection finalStrings={finalStrings} />
            ) : (
                <StyledQuestionForm>
                    <StyledSectionTitle>
                        {questionGroup?.sectionTitle}
                    </StyledSectionTitle>
                    { questionIdArr.map((id) => {
                        const question = questionGroup?.questions?.[id];
                        if (question) {
                            return (
                                <Question 
                                    key={`Question_${id}`} 
                                    question={question} 
                                    selectedOutcomes={selectedOutcomes}
                                    setSelectedOutcomes={setSelectedOutcomes}
                                />
                            );
                        }
                        return <></>;
                    })}
                    { isTerminal && (
                        <NameInput setName={setName} />
                    )}
                    <QuestionSubmit 
                        isTerminal={isTerminal} 
                        name={name} 
                        outcome={outcome}
                        selectedOutcomes={selectedOutcomes}
                        setIsDisabled={setIsDisabled}
                        setQuestionGroupId={setQuestionGroupId}
                        setFinalStrings={setFinalStrings} />
                </StyledQuestionForm>
            )}
            
        </>
    );
};