//INDEX CONTROLLER
const token = process.env.CONGRESS_GOV_TOKEN;
const ROOT_URL = 'https://api.congress.gov/';

module.exports = {
  index
}

async function index(req, res, next) {
  //const username = req.query.username;
  const committeesIndexUrl = `${ROOT_URL}v3/committee-meeting/115/house/105497?api_key=${token}&format=json`
  const resData = await fetch(committeesIndexUrl)
  .then(res => res.json()) 
  console.log (committeesIndexUrl, resData)
  res.render('index');
}
