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

    const response: AxiosResponse<killbill.Tag[], any> = await api.getSubscriptionAuditLogsWithHistory(subscriptionId, 'created_by');
    console.log(response.data);
  });

});
