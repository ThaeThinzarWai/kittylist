const cat = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CAT' : 
        
            const formData = new FormData();
            formData.append('sub_id', action.text.sub_id)
            formData.append('file', action.text.file)

            fetch("https://api.thecatapi.com/v1/images/upload", {
                method: 'POST',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'x-api-key': '6e27939c-67e0-4eaa-bb9e-9f9e2a212c9b'
                }),
                body : {
                    "sub_id": action.text.sub_id,
                    "file": action.text.file
                }
            })
            .then((response) => response.json())
            .then((messages) => {console.log("messages");});
            console.log(action.text.file);

            return state;
        default : return state;
    }
}

export default cat;