import Joi from 'joi';
import { Schema, model } from 'mongoose';

export const questionSchemaValidate = Joi.object({
    outcomeId: Joi.object({
        type: Joi.string().hex().length(24).required(),
        ref: Joi.string().required(),
    }),
    title: Joi.string().required(),
    // This ideally would be a union type of the types of controls we want,
    // e.g. type: RadioType | CheckboxType | TextInputType or however you'd
    // bike-shed this, but for expediency I'll just do string matching.
    type: Joi.string().required()
});

interface IQuestion {
    outcomeId: { type: Schema.Types.ObjectId, ref: 'Outcome' },
    title: String,
    type: String
};

const questionSchema = new Schema<IQuestion>({
    outcomeId: {
        type: Schema.Types.ObjectId, ref: 'Outcome'
    },
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
});

 export const Question = model<IQuestion>('Question', questionSchema);

