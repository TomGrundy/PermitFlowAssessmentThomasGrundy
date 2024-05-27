import { REQUEST_DOMAIN } from "./constants";

export interface IOutcomeResponse {
    _id: string,
    strings?: Array<string>,
    nextQuestionGroupId?: string,
};

export interface IQuestionResponse {
    _id: string,
    outcomeId: IOutcomeResponse,
    title: string,
    type: string,
};

export interface IQuestionGroupResponse {
    _id: string,
    questionLogicOrder: Array<string>,
    questions: {
        [key: string]: IQuestionResponse
    },
    questionOrder: Array<string>,
    sectionTitle: string
};

export const getQuestionGroup = async (questionGroupId?: string): Promise<IQuestionGroupResponse | undefined> => {
    try {
        const fullURIToFetch = questionGroupId !== '' ? `${REQUEST_DOMAIN}/questionGroup/${questionGroupId}` : `${REQUEST_DOMAIN}/questionGroup`;
        const response = await fetch(fullURIToFetch);
        return await response.json();
    } catch(err) {
        console.log(err);
        return;
    }    
};
