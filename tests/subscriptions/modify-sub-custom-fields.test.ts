import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Modify Custom Field', () => {

  test('Modify Custom Field', async () => {
    console.log('Modify Custom Field');
    const api: killbill.SubscriptionApi = new killbill.SubscriptionApi(config);

    const subscriptionId = 'b6000207-42fd-40ea-9c8e-297d9adc1574';

    const customField: CustomField = {customFieldId: "d8f2e80d-9fd8-48e7-b564-a541a0a7621d", value: "new_value"};
    const customFields = [customField];

    api.modifySubscriptionCustomFields(customFields, subscriptionId, 'created_by');

  });

});
