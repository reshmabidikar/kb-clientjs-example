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
    const api: killbill.PaymentMethodApi = new killbill.PaymentMethodApi(config);

    const customField: CustomField = {name: "Test Custom Field", value: "test_value"};
    const customFields = [customField];

    const paymentMethodId = '06e5c871-3caf-41c2-9d7e-30c95f6e309c';

    api.createPaymentMethodCustomFields(customFields, paymentMethodId, 'created_by');

  });

});
