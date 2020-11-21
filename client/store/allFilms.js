import axios from 'axios'

// action types
const GOT_ALL_FILMS = 'GOT_ALL_FILMS'

// action creators
const gotAllFilms = films => ({
  type: GOT_ALL_FILMS,
  films
})

// thunk creators
export const fetchFilms = () => {
  return async dispatch => {
    try {
      const {data: films} = await axios.get('/api/films')
      dispatch(gotAllFilms(films))
    } catch (err) {
      console.log('failed to fetch films', err)
    }
  }
}

// initial state
const initialState = []

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_FILMS:
      return action.films
    default:
      return state
  }
}

export default filmReducer
