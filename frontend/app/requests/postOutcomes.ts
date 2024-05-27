import { REQUEST_DOMAIN } from "./constants";
import { IOutcomeResponse, IQuestionResponse } from "./getQuestionGroup";

export type OutcomeRequest = {
    [key: IQuestionResponse["_id"]]: IOutcomeResponse["_id"]
};

export const postOutcomes = async (outcomes?: OutcomeRequest) => {
    const name = outcomes?.name;
    delete outcomes?.name;
    const outcomesToSend = {chosenOutcomeIds: outcomes, name};
    try {
        const response = await fetch(`${REQUEST_DOMAIN}/storeOutcomes`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(outcomesToSend)
        });
        return;
    } catch(err) {
        console.log(err);
    }    
};