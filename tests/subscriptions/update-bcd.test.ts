import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Update BCD', () => {

  test('Update BCD', async () => {
    console.log('Update BCD');
    const api: killbill.SubscriptionApi = new killbill.SubscriptionApi(config);

    const subscription: subscription = {billCycleDayLocal: 10};
    const subscriptionId = 'e5254822-680f-4720-b5e1-a7146cefb904';

    api.updateSubscriptionBCD(subscription, subscriptionId, 'created_by');

  });

});
