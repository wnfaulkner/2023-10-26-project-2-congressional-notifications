//INDEX CONTROLLER
//const token = process.env.CONGRESS_GOV_TOKEN;
// const ROOT_URL = 'https://api.congress.gov/';

const token = process.env.WEATHERAPI_KEY
const ROOT_URL = 'https://api.weatherapi.com/v1/';
const endpoint = 'forecast'

module.exports = {
  // apiIndex,
  index,
}

async function index(req, res, next) {

  const endpointUrl = `${ROOT_URL}${endpoint}.json?key=${token}&q=70116&days=1&aqi=no&alerts=no`
  const endpointData = await fetch(endpointUrl)
  .then(res => res.json()) 
  console.log (endpointUrl, endpointData.forecast.forecastday)

  res.render('index');
}


// async function index(req, res, next) {
//   const summariesIndexUrl = `${ROOT_URL}v3/summaries?api_key=${token}&format=json`
//   const summariesData = await fetch(summariesIndexUrl)
//   .then(res => res.json()) 
//   console.log (summariesData)

//   res.render('index');
// }
