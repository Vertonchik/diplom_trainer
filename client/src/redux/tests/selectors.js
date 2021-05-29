export const selectTestsList = state => state.tests.list;

export const selectCurrentTest = state => state.tests.currentTest;

export const selectQuestionById = (id) => state => selectCurrentTest(state).adminQuestions[id];