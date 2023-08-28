import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Create Subscription', () => {

  test('Create Subscription', async () => {
    console.log('Create Subscription');
    const api: killbill.SubscriptionApi = new killbill.SubscriptionApi(config);

    const base: Subscription = {planName: "pistol-monthly", accountId: "04779ade-11f9-48d1-88a1-a63be84d1cb7"};
    const addon: Subscription = {planName: "cleaning-monthly", accountId: "04779ade-11f9-48d1-88a1-a63be84d1cb7"};
    const subscriptions =[base, addon];

    api.createSubscriptionWithAddOns(subscriptions, 'created_by');

  });

});
