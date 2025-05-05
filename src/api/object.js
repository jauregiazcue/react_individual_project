import fetchData from "./fetch.js";

async function getAllLostObjects() {
    const response = await fetchData("/object");
    return response;
}

async function getObjectByID(id) {
    const response = await fetchData("/object/" + id);
    return response;
}


async function getObjectsByCategory(id) {
    const response = await fetchData("/object/category/" + id);
    return response;
}


export {
    getAllLostObjects,
    getObjectsByCategory
}