import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Retrieve Subscription', () => {

  test('Retrieve Subscription by Id', async () => {
    console.log('Retrieve Subscription by Id');
    const api: killbill.SubscriptionApi = new killbill.SubscriptionApi(config);

    const subscriptionId= 'a07be253-f7ce-4719-9959-037e05ff0777';

    const response: AxiosResponse<killbill.Subscription, any> = await api.getSubscription(subscriptionId,'NONE');
    console.log(response.data);
  });

  test('Retrieve Subscription by Key', async () => {
    console.log('Retrieve Subscription by Key');
    const api: killbill.SubscriptionApi = new killbill.SubscriptionApi(config);

    const key= 'a07be253-f7ce-4719-9959-037e05ff0777';

    const response: AxiosResponse<killbill.Subscription, any> = await api.getSubscriptionByKey(key,'NONE');
    console.log(response.data);
  });


});
