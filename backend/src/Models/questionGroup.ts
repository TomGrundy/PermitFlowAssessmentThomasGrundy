import Joi from 'joi';
import { Schema, model } from 'mongoose';

export const questionGroupSchemaValidate = Joi.object({
    // The order the questions should be evaluated in when determining
    // what happens next.
    questionLogicOrder: Joi.array().items(
        Joi.string().hex().length(24).required()
    ).required(),
    // Just an array of the questions themselves to populate in queries.
    questions: Joi.array().items(Joi.object({
        questionId: Joi.object({
            type: Joi.string().hex().length(24).required(),
            ref: Joi.string().required(),
        }),
    })).required(),
    // The order the questions should show in the UI.
    questionOrder: Joi.array().items(Joi.string().hex().length(24).required()),
    sectionTitle: Joi.string(),
    // To extend this, some kind of controlFlow param could be used here
    // to determine how the ordered questions are handled
    // e.g. if -> else if -> else, or just a series of ifs that are additive
    // to something. e.g. controlFlow: 'exclusive' | 'additive';
});

export interface IQuestionGroup {
    questionLogicOrder: Array<Schema.Types.ObjectId>
    questions: Array<{
        questionId: {
            _id: string,
            type: Schema.Types.ObjectId, ref: 'Question'
        },
    }>,
    questionOrder: Array<Schema.Types.ObjectId>
    sectionTitle: String
};

const questionGroupSchema = new Schema<IQuestionGroup>({
    questionLogicOrder: [Schema.Types.ObjectId],
    questions: [{ 
        questionId: {
            type: Schema.Types.ObjectId, ref: 'Question'
        }
    }],
    questionOrder: [Schema.Types.ObjectId],
    sectionTitle: {
        type: String,
        required: false,
    }
});

 export const QuestionGroup = model<IQuestionGroup>('QuestionGroup', questionGroupSchema);