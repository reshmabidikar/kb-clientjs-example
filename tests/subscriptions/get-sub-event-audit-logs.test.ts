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

    const eventId = 'dc283026-5be0-4e47-8190-b62fb0c9e357';

    const response: AxiosResponse<killbill.Tag[], any> = await api.getSubscriptionEventAuditLogsWithHistory(eventId, 'created_by');
    console.log(response.data);
  });

});
