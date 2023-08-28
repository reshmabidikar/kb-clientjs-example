import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Change Plan', () => {

  test('Change Plan', async () => {
    console.log('Change Plan');
    const api: killbill.SubscriptionApi = new killbill.SubscriptionApi(config);

    const subscription: Subscription = {planName: "pistol-monthly-notrial"};
    const subscriptionId = 'e5254822-680f-4720-b5e1-a7146cefb904';

    api.changeSubscriptionPlan(subscription, subscriptionId, 'created_by');

  });

});
