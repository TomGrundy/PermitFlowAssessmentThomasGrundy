import Joi from 'joi';
import { Schema, model } from 'mongoose';

export const outcomeSchemaValidate = Joi.object({
    strings: Joi.array().items(Joi.string()),
    nextQuestionGroupId: Joi.object({
        type: Joi.string().hex().length(24),
        ref: Joi.string(),
    })
});

interface IOutcome {
    strings: Array<String>,
    nextQuestionGroupId: { type: Schema.Types.ObjectId, ref: 'QuestionGroup' }
};

const outcomeSchema = new Schema<IOutcome>({
    strings: {
        type: [String],
        required: false
    },
    nextQuestionGroupId: {
        type: Schema.Types.ObjectId, ref: 'QuestionGroup',
    },
});

 export const Outcome = model<IOutcome>('Outcome', outcomeSchema);

