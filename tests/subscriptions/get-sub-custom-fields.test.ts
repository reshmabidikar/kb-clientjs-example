import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Get Custom Field', () => {

  test('Get Custom Field', async () => {
    console.log('Get Custom Field');
    const api: killbill.SubscriptionApi = new killbill.SubscriptionApi(config);

    const subscriptionId = 'e5254822-680f-4720-b5e1-a7146cefb904';
    const audit = 'NONE';

    const response: AxiosResponse<killbill.CustomField[], any> = await api.getSubscriptionCustomFields(subscriptionId, audit, 'created_by');
    console.log(response.data);

  });

});
