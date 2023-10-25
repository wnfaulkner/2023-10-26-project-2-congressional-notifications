//INDEX CONTROLLER
const token = process.env.CONGRESS_GOV_TOKEN;
const ROOT_URL = 'https://api.congress.gov/';

module.exports = {
  index
}

async function index(req, res, next) {
  //const username = req.query.username;
  const committeesIndexUrl = `${ROOT_URL}v3/committee-meeting?api_key=${token}&format=json`
  const resData = await fetch(committeesIndexUrl)
  .then(res => res.json()) 
  console.log (resData)

  // const billText = await fetch(`https://www.congress.gov/118/bills/hr4394/BILLS-118hr4394rh.htm`)
  // //.then(res => res.json())

  // console.log(billText)

  res.render('index');
}
