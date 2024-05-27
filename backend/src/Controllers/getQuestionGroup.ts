import { Request, Response } from 'express';
import questionGroupFind from '../Services/questionGroupFind';
import { initialId } from '../Utils/initialDataToLoad';

export const getQuestionGroup = async (req: Request, res: Response) => {
    const result = await questionGroupFind(req?.params?.questionId ?? initialId.toString());
    if (!result) {
        return res.status(404).send();
    }

    return res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .send(result);
};