const BASE_URL="http://localhost:3000/api"

async function fetchData(route, method="GET",info=null) {
    const url = BASE_URL + route;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}

export default fetchData;