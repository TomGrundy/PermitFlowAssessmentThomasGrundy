import { Outcome } from "../Models/outcome";
import { Question } from "../Models/question";
import { QuestionGroup } from "../Models/questionGroup";
import questionGroupFind from "../Services/questionGroupFind";
import {
    bathroomRemodelQuestion,
    exteriorDoorsQuestion,
    exteriorWorkQuestion,
    exteriorWorkQuestionGroup,
    exteriorWorkTransitionOutcome,
    fencingQuestion,
    garageDoorQuestion,
    inHouseReviewOutcome,
    initialId,
    interiorWorkQuestion,
    interiorWorkQuestionGroup,
    interiorWorkTransitionOutcome,
    newBathroomQuestion,
    newLaundryQuestion,
    noPermitOutcome,
    otcSubmissionOutcome,
    otherExteriorQuestion,
    otherInteriorQuestion,
    residentialWorkQuestionGroup
} from "./initialDataToLoad";

export const loadInitialData = async () => {
    const doesDBHaveStuffInIt = await questionGroupFind(initialId.toString());
    if (!doesDBHaveStuffInIt) {
        await Outcome.insertMany([
            otcSubmissionOutcome, 
            inHouseReviewOutcome, 
            interiorWorkTransitionOutcome, 
            noPermitOutcome, 
            exteriorWorkTransitionOutcome
        ]);
        await Question.insertMany([
            bathroomRemodelQuestion, 
            newBathroomQuestion, 
            newLaundryQuestion, 
            otherInteriorQuestion,
            garageDoorQuestion,
            exteriorDoorsQuestion,
            fencingQuestion,
            otherExteriorQuestion,
            interiorWorkQuestion,
            exteriorWorkQuestion
        ]);
        await QuestionGroup.insertMany([
            interiorWorkQuestionGroup, 
            exteriorWorkQuestionGroup, 
            residentialWorkQuestionGroup
        ]);
    }
};