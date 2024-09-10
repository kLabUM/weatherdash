import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { ScrapeForecastLambdaStack } from './functions/resources';
/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
});

new ScrapeForecastLambdaStack(
  backend.createStack('ScrapeForecastLambdaStack'),
  'ScrapeForecastLambdaResource',
  {}
);