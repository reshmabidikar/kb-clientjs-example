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
    const api: killbill.PaymentTransactionApi = new killbill.PaymentTransactionApi(config);

    const customField: CustomField = {name: "Test Custom Field", value: "test_value"};
    const customFields = [customField];

    const paymentTransactionId = '8dabaa02-c926-4ec3-b0bb-47fe2271b62f';

    api.createTransactionCustomFields(customFields, paymentTransactionId, 'created_by');

  });

});
