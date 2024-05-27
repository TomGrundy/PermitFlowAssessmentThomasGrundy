
// interior flow in reverse order:
export const otcSubmissionOutcome = {
    _id: '664f65eeceb485eb9c6e6aff',
    strings: [
        'Over-the-Counter Submission Process.', 
        '- A building permit is required.',
        '- Submit application for OTC review.'
    ]
};

export const inHouseReviewOutcome = {
    _id: '664f65eeceb485eb9c6e6afe',
    strings: [
        'In-House Review Process', 
        '- A building permit is required.',
        '- Include plan sets.',
        '- Submit application for in-house review.'
    ]
};

export const bathroomRemodelQuestion = {
    _id: '664f65eeceb485eb9c6e6afd',
    outcomeId: otcSubmissionOutcome._id,
    title: 'Bathroom remodel',
    type: 'checkbox'
};

export const newBathroomQuestion = {
    _id: '664f65eeceb485eb9c6e6af9',
    outcomeId: inHouseReviewOutcome._id,
    title: 'New bathroom',
    type: 'checkbox'
};

export const newLaundryQuestion = {
    _id: '664f65eeceb485eb9c6e6af8',
    outcomeId: inHouseReviewOutcome._id,
    title: 'New laundry room',
    type: 'checkbox'
};

export const otherInteriorQuestion = {
    _id: '664f65eeceb485eb9c6e6af7',
    outcomeId: inHouseReviewOutcome._id,
    title: 'Other',
    type: 'checkbox'
};

export const interiorWorkQuestionGroup = {
    _id: '664f65eeceb485eb9c6e6af6',
    questionLogicOrder: [
        bathroomRemodelQuestion._id,
        newBathroomQuestion._id, 
        newLaundryQuestion._id,
        otherInteriorQuestion._id
    ],
    questions: [
        { questionId: bathroomRemodelQuestion._id },
        { questionId: newBathroomQuestion._id },
        { questionId: newLaundryQuestion._id },
        { questionId: otherInteriorQuestion._id }
    ],
    questionOrder: [
        bathroomRemodelQuestion._id,
        newBathroomQuestion._id,
        newLaundryQuestion._id,
        otherInteriorQuestion._id
    ],
    sectionTitle: 'What interior work are you doing?',
};

export const interiorWorkTransitionOutcome = {
    _id: '664f65e3199dc3f9d30f9c6b',
    nextQuestionGroupId: interiorWorkQuestionGroup._id,
};

// Exterior flow:
export const noPermitOutcome = {
    _id: '664f65e3199dc3f9d30f9c6a',
    strings: [
        'No Permit', 
        '- Nothing is required! You\'re set to build.',
    ]
};

export const garageDoorQuestion = {
    _id: '664f65e3199dc3f9d30f9c67',
    outcomeId: otcSubmissionOutcome._id,
    title: 'Garage door replacement',
    type: 'checkbox'
};

export const exteriorDoorsQuestion = {
    _id: '664f65e3199dc3f9d30f9c66',
    outcomeId: otcSubmissionOutcome._id,
    title: 'Exterior door replacement',
    type: 'checkbox'
};

export const fencingQuestion = {
    _id: '664f65e3199dc3f9d30f9c65',
    outcomeId: noPermitOutcome._id,
    title: 'Exterior door replacement',
    type: 'checkbox'
};

export const otherExteriorQuestion = {
    _id: '664f65e3199dc3f9d30f9c64',
    outcomeId: inHouseReviewOutcome._id,
    title: 'Other',
    type: 'checkbox'
};

export const exteriorWorkQuestionGroup = {
    _id: '664f65e3199dc3f9d30f9c60',
    questionLogicOrder: [
        otherExteriorQuestion._id,
        garageDoorQuestion._id, 
        exteriorDoorsQuestion._id,
        fencingQuestion._id,
    ],
    questions: [
        { questionId: otherExteriorQuestion._id },
        { questionId: garageDoorQuestion._id }, 
        { questionId: exteriorDoorsQuestion._id },
        { questionId: fencingQuestion._id },
    ],
    questionOrder: [
        garageDoorQuestion._id, 
        exteriorDoorsQuestion._id, 
        fencingQuestion._id, 
        otherExteriorQuestion._id
    ],
    sectionTitle: 'What exterior work are you doing?',
};

export const exteriorWorkTransitionOutcome = {
    _id: '664f65e3199dc3f9d30f9c5f',
    nextQuestionGroupId: exteriorWorkQuestionGroup._id,
};

// Initial residential work flow:
export const interiorWorkQuestion = {
    _id: '664f65e3199dc3f9d30f9c5e',
    outcomeId: interiorWorkTransitionOutcome._id,
    title: 'Interior work',
    type: 'radio'
};

export const exteriorWorkQuestion = {
    _id: '664f65e3199dc3f9d30f9c5d',
    outcomeId: exteriorWorkTransitionOutcome._id,
    title: 'Exterior work',
    type: 'radio'
};

export const initialId = '664f5d0eee767f6fc9eace6d';

export const residentialWorkQuestionGroup = {
    _id: initialId,
    questionLogicOrder: [interiorWorkQuestion._id, exteriorWorkQuestion._id],
    questions: [
        { questionId: interiorWorkQuestion._id }, 
        { questionId: exteriorWorkQuestion._id }
    ],
    questionOrder: [interiorWorkQuestion._id, exteriorWorkQuestion._id],
    sectionTitle: 'What residential work are you doing?',
};