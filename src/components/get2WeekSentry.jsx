

const API_URL = "https://t2or5xn5y8.execute-api.us-east-2.amazonaws.com/default/scrapeForecast2Week"


export default async function get2WeekSentry() {
    let response = await fetch(API_URL, {mode: 'cors',
      header: {
        'Access-Control-Allow-Origin':'*',
      }})
    let json = await response.json();
    return json;
}


