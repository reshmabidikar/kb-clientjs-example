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
    const api: killbill.PaymentTransactionApi = new killbill.PaymentTransactionApi(config);

    const paymentTransactionId = '8dabaa02-c926-4ec3-b0bb-47fe2271b62f';
    const audit = 'NONE';

    const response: AxiosResponse<killbill.CustomField[], any> = await api.getTransactionCustomFields(paymentTransactionId, audit, 'created_by');
    console.log(response.data);

  });

});
