
const initialState = {
  news: [],
  sources: [],
  loadedSources:[],
  selectedNews: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_NEWS':
      return {
        ...state, news: action.payload
      }
    case 'LOAD_SOURCES':
      return {
        ...state, sources: action.payload
      }
    case 'SELECTED_SOURCES':
      return {
        ...state, loadedSources: action.payload
      }
    case 'SELECTED_NEWS' :
      return {
        ...state, selectedNews: action.payloadd
      }
    default:
      return state;
  }
}

export default reducer;