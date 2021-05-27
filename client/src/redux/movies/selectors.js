export const selectMoviesList = state => state.movies.list;

export const selectCurrentMovie = state => state.movies.currentMovie;

export const selectVideoById = (id) => state => selectCurrentMovie(state).adminVideos[id];