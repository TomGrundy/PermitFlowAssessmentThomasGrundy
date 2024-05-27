import express from "express";
import { getQuestionGroup } from "../Controllers/getQuestionGroup";
import { postStoreOutcomes } from "../Controllers/postStoreOutcomes";

export const router = express.Router();

router.get('/questionGroup/:questionId', getQuestionGroup);
// Gets the initial question.
router.get('/questionGroup', getQuestionGroup);
router.post('/storeOutcomes', postStoreOutcomes);