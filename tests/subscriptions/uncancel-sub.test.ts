import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Uncancel Subscription', () => {

  test('Uncancel Subscription', async () => {
    console.log('Uncancel Subscription');
    const api: killbill.SubscriptionApi = new killbill.SubscriptionApi(config);

    const subscriptionId= '1664777f-f194-48fd-a274-e883063790b1';

    api.uncancelSubscriptionPlan(subscriptionId, 'created-by');

  });




});
