import axios from 'axios';

//news API key
const API_KEY = '&apiKey=4fbe29ec468d41c2a22331f141faab1f';

//first action to fetch Top Headlines
export const fetchNewsData = () => {
  console.log("made it to fetch");
  return (dispatch, getState, url) => {
    axios.get(url + 'country=us' + API_KEY)
      .then(({ data }) => {
        console.log(data);
        dispatch(loadNewsToState(data));
      });
  }
}
//loading the top headline articles to state for display
export function loadNewsToState(payload) {
  return {
    type: 'LOAD_NEWS',
    payload
  }
}
//passing in the selected category to display sources for
export const fetchCatSources = (payload) => {
  return (dispatch, getState, url) => {
    axios.get(url + 'country=us&category=' + payload + API_KEY)
      .then(({ data }) => {
        console.log(data);
        dispatch(loadCatSourcesToState(data));
      });
  }
}
//loading the returned sources to state for display
export function loadCatSourcesToState(payload) {
  return {
    type: 'LOAD_SOURCES',
    payload
  }
}
//load subscribed sources to external data store once returned from Categories
export function saveSources(payload) {
  return {
    // post call to mockAPI to add to our 'datastore'
  }
}
//action to fetch the saved Sourcess
export const fetchSavedSources = () => {
  //get call to mockAPI to retrieve saved sources
}



//action to fetch articles passing the saved sources to the News API