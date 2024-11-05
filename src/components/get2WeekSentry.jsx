import { downloadData } from 'aws-amplify/storage';

export default async function get2WeekSentry() {
  const downloadResult = await downloadData({
    path: "media/sentry2week.json"
  }).result;
  const json = await downloadResult.body.text();
  return json;
}


