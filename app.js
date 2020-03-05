const {getLongLat,getWeather } = require('./lugar/functions')

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv

getLongLat(argv.direccion)
                .then( (res) => {
                      return res;
                }).then(
                    (res) => {
                       return getWeather(res.lat,res.lng)
                    }
                ).then(
                    (clima) => {
                        console.log(clima.data.main);
                    }
                )
                .catch((err) =>{
                    console.log(err);
                })

// getWeather(30,139).then((res)=>{console.log(res)}).catch(err=>console.log(err))
