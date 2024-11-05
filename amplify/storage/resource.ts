import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'weatherdashResources',
  access: (allow) => ({
    'media/*': [
      allow.authenticated.to(['read'])
    ]
  })
});