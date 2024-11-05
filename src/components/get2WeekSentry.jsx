import { downloadData } from 'aws-amplify/storage';

export default async function get2WeekSentry() {
  const downloadResult = await downloadData({
    path: "sentry2week.json"
  }).result;
  const json = await downloadResult.body.json();
  return json;
}


