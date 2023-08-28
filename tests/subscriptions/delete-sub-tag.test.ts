import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Add Custom Field', () => {

  test('Add Custom Field', async () => {
    console.log('Add Custom Field');
    const api: killbill.SubscriptionApi = new killbill.SubscriptionApi(config);

    const subscriptionId = '92820d1c-1d4c-46eb-9010-26b0626a1927';

    const tagDefIds = ['06d991f7-f06a-4e45-80d2-c3b44a97f8bc'];

    api.deleteSubscriptionTags(subscriptionId, 'created_by', tagDefIds);

  });

});
