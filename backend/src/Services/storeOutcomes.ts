import { ChosenOutcomes } from "../Models/chosenOutcomes";

const storeOutcomes = async (data: any) => {
    try {
        // Updates if the name matches, otherwise, inserts new item. 
        // Given there's no user accounts
        // or security requirements, this is fine... right? 
        await ChosenOutcomes.findOneAndUpdate(
            {
                name: data.name,
            },
            data,
            { upsert: true, setDefaultsOnInsert: true }
        ).exec();
        return {};
    } catch (err) {
        console.log(err);
        return;
    }
};

export default storeOutcomes;