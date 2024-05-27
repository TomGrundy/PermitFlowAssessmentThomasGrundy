import { QuestionGroup } from "../Models/questionGroup";

const questionGroupFind = async (questionId: string) => {
    try {
        return await QuestionGroup.findById(questionId)
        .populate({
            path: 'questions.questionId',
            model: 'Question',
            populate : {
                path : 'outcomeId',
                model: 'Outcome'
            }
        })
        .transform(questionGroup => {
            // For the client, key a hashmap the question data off the id for easy O(1) lookups.
            const questions = questionGroup?.questions ? questionGroup.questions.reduce((acc: {[key: string]: {}}, question) => {
                acc[question.questionId._id] = question.questionId;
                return acc;
            }, {}) : undefined;
            if (questions) {
                return {
                    ...questionGroup?.toObject(),
                    questions
                }
            }
            return undefined;
        });
    } catch (err) {
        console.log(err);
    }
};

export default questionGroupFind;