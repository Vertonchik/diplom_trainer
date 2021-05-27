export const selectTestsList = state => state.tests.list;

export const selectCurrentTest = state => state.tests.currentTest;

export const selectVideoById = (id) => state => selectCurrentTest(state).adminVideos[id];