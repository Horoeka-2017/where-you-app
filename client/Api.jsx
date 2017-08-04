
import request from 'superagent'

const countryUrl = 'https://restcountries-v1.p.mashape.com/all'
const countryKey = { 'X-Mashape-Key': 'xETTsDEn7WmshLwry8rBa3OjUItBp1x4OGNjsnDmVwK7VgFNVY' }

export function getRandomCountryData(callback) {
  request
    .get(countryUrl)
    .set(countryKey)
    .set('Accept', 'application/json')
    .end((err, res) => {
      console.log(res.body)
      if (err) {
        callback(err)
      } else {
        return callback(null, res.body)
      }
    })
}
