const axios = require('axios');


const getLongLat = async (dir) =>{

    const encodeURL = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: {'X-RapidAPI-Key': '7ce1dae268msh5322cb6b341c755p114df9jsn6d348f726931'}
      });
    
    const resp = await instance.get()

    if (resp.data.Results[0] === 0 ){
        throw new Error(`No hay resultados para la ${dir}`);
    }

    let data= resp.data.Results[0];
    let dire = data.name;
    let lat = data.lat;
    let lng = data.lon;

    return {
        dire,
        lat,
        lng
    }
}

const getWeather = async (lat,long ) => {
    let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=dea70a5b1528ade5939c90df95c49579`);
    return res;
}

module.exports = {
    getLongLat,
    getWeather 
}
