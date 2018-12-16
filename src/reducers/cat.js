import axios from 'axios';

const api_key = "6e27939c-67e0-4eaa-bb9e-9f9e2a212c9b";

const cat = (state = [], action) => {
  switch (action.type) {
    case "ADD_CAT":
      const formData = new FormData();
      formData.append("sub_id", action.text.sub_id);
      formData.append("file", action.text.file);

      axios.defaults.headers.common["x-api-key"] = api_key;
      axios
        .post("https://api.thecatapi.com/v1/images/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(response => alert("Successfully Added New Cat Image"));

      return state;
    default:
      return state;
  }
};

export default cat;