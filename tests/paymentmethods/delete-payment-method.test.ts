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

  test('Delete PM', async () => {
    console.log('Delete PM');
    const api: killbill.PaymentMethodApi = new killbill.PaymentMethodApi(config);

    const paymentMethodId = 'dab6464d-13eb-4702-864c-3d7297bbcf23';

    api.deletePaymentMethod(paymentMethodId, 'created_by');

  });

});
