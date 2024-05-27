import { Request, Response } from 'express';
import { chosenOutcomesSchemaValidate } from '../Models/chosenOutcomes';
import storeOutcomes from '../Services/storeOutcomes';

export const postStoreOutcomes = async (req: Request, res: Response) => {
    const { error, value } = chosenOutcomesSchemaValidate.validate(req?.body ?? {});
    console.log('dafuq', value);
    // If the data from client isn't valid, don't store it.
    if (error) {
        console.log(error);
        return res.status(500).send(error.message);
    } 
    await storeOutcomes(value);
    return res.status(201).send();
};