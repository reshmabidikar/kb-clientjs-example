import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Cancel Subscription', () => {

  test('Cancel Subscription', async () => {
    console.log('Cancel Subscription');
    const api: killbill.SubscriptionApi = new killbill.SubscriptionApi(config);

    const subscriptionId= '66d3d89f-e074-49cc-bf9a-96a2e57d15ab';

    api.cancelSubscriptionPlan(subscriptionId, 'created-by');

    //const response: AxiosResponse<killbill.Subscription, any> = await api.cancelSubscriptionPlan(subscriptionId,'created-by', '', false, 3, '', '', false, null, 'reason', 'comment');
    //console.log(response.data);
  });




});
