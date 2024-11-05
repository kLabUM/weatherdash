import { downloadData } from 'aws-amplify/storage';

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

export default async function updateForecast() {
  let data = [
    "-", "-", "-", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    ];
    const downloadResult = await downloadData({
      path: "media/sentry7day.json"
    }).result;
    const json = await downloadResult.body.json();

    data = updateData(json);
    return data;
}


