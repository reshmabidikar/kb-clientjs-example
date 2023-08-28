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

    const subscription: Subscription = {planName: "blowdart-monthly", accountId: "04779ade-11f9-48d1-88a1-a63be84d1cb7"};

    api.createSubscription(subscription, 'created_by');
    //api.createSubscription(subscription, 'created_by', '', '', false, false, false, false, 3, null, 'reason', 'comment');

  });

});
