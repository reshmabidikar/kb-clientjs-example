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

    const customField: CustomField = {name: "Test Custom Field", value: "test_value"};
    const customFields = [customField];

    const subscriptionId = 'b6000207-42fd-40ea-9c8e-297d9adc1574';

    api.createSubscriptionCustomFields(customFields, subscriptionId, 'created_by');

  });

});
