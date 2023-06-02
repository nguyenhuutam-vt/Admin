const axios = require("axios");

const options = {
    method: 'GET',

    params: {},
    headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': ''
    }
};
export const fecthlinkP = async (url) => {
    const { data } = await axios.get(`https://dummyjson.com/products`, options);

    return data;
};