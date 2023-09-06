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
    const api: killbill.PaymentTransactionApi = new killbill.PaymentTransactionApi(config);

    const paymentTransactionId = '8dabaa02-c926-4ec3-b0bb-47fe2271b62f';

    const customField: CustomField = {customFieldId: "690b4723-5d54-4b89-afe0-dae0d146183c", value: "new_value"};
    const customFields = [customField];

    api.modifyTransactionCustomFields(customFields, paymentTransactionId, 'created_by');

  });

});
