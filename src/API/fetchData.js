import { apiKey } from "../globalConstants";

export const fetchData = async (url) => {
    //let headers = {"Access-Control-Allow-Origin'":" https://localhost:3000"};
    let headers = {"Authorization": `Basic ${apiKey}`};
    return await fetch(url, {
        method: "GET",
        mode: 'cors',
        credentials:'same-origin',
        headers: headers
    })
        .then(function (response) {
            //The API call was successful!
            if (response.status === 200) {
                return response.json();
            } else {
                return Promise.reject(response);
            }
        })
        .catch(function (err) {
            console.error("Error in fetching data from Companys House API.", err);
            throw (err);
        });
};