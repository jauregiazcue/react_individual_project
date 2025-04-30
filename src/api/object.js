import fetchData from "./fetch.js";

async function getAllLostObjects() {
    const response = await fetchData("/object");
    return response;
}

async function getObjectByID(id) {
    const response = await fetchData("/object/" + id);
    return response;
}


export {
    getAllLostObjects
}