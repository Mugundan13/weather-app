const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=319225e7d19e9d3492f8c684fef2192d&query=${latitude},${longitude}`

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                weather: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                precipitation: body.current.precip,
                weatherIcon: body.current.weather_icons[0]
            })
        }
    })
}

module.exports = forecast