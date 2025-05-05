import fetchData from "./fetch.js";

async function getAll() {
    const response = await fetchData("/objCat");
    return response;
}




export {
    getAll,
}