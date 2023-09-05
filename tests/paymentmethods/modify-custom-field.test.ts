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
    const api: killbill.PaymentMethodApi = new killbill.PaymentMethodApi(config);

    const paymentMethodId = '06e5c871-3caf-41c2-9d7e-30c95f6e309c';

    const customField: CustomField = {customFieldId: "8b8374b5-ef9b-4eb1-b820-1b9bde00d277", value: "new_value"};
    const customFields = [customField];

    api.modifyPaymentMethodCustomFields(customFields, paymentMethodId, 'created_by');

  });

});
