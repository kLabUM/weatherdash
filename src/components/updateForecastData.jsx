

const API_URL = "https://t2or5xn5y8.execute-api.us-east-2.amazonaws.com/default/scrapeForecast"

function updateData(json) {
    let data = [
        "", "", "", "", "", "", "",
        "", "", "", "", "", "", "",
        "", "", "", "", "", "", "",
        "", "", "", "", "", "", "",
        "", "", "", "", "", "", "",
    ];
    const keys = Object.keys(json["Weather"]);
    for (let i = 0; i < keys.length; i++) {
      data[0 + i] = keys[i];
    }
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      data[7 + i] = json["Weather"][key]
    }
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      data[14 + i] = json["Precipitation"][key]
    }
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      data[21 + i] = json["Chance"][key]
    }
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      data[28 + i] = json["Temp. Range"][key]
    }
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      data[35 + i] = json["Wind Speed"][key]
    }

    return data;
  }

async function makeRequest() {

}

export default async function updateForecast() {
  let data = [
    "-", "-", "-", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
];
    let response = await fetch(API_URL, {mode: 'cors',
      header: {
        'Access-Control-Allow-Origin':'*',
      }})
    let json = await response.json();
    data = updateData(json);
    return data;
}


