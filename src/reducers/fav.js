import axios from 'axios';

const api_key = "6e27939c-67e0-4eaa-bb9e-9f9e2a212c9b";

const fav = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAV":

        console.log(action.text);
        axios.defaults.headers.common["x-api-key"] = api_key;
        axios
            .post("https://api.thecatapi.com/v1/favourites", action.text, {
            headers: { "Content-Type": "application/json" }
            })
            .then(response => console.log(response));

      return state;
    default:
      return state;
  }
};

export default fav;