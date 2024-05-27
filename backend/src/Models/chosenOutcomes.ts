import Joi from 'joi';
import { Schema, model } from 'mongoose';

// This is bonus storage so I'm just quickly stubbing out the storage of the response into Mongo
export const chosenOutcomesSchemaValidate = Joi.object({
    chosenOutcomeIds: Joi.object().required(),
    name: Joi.string().required(),
});

interface IChosenOutcomes {
    chosenOutcomeIds: Object,
    name: String,
};

const chosenOutcomesSchema = new Schema<IChosenOutcomes>({
    chosenOutcomeIds: Object,
    name: String
});

 export const ChosenOutcomes = model<IChosenOutcomes>('ChosenOutcomes', chosenOutcomesSchema);

