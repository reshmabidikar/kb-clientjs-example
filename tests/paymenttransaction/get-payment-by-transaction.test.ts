import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Retrieve Payment', () => {

  test('Retrieve Payment by Transaction Id', async () => {
    console.log('Retrieve Payment by Transaction Id');
    const api: killbill.PaymentTransactionApi = new killbill.PaymentTransactionApi(config);

    const paymentTransactionId = '37b95fef-f5be-4771-80e4-d41af8e528cb';

    const response: AxiosResponse<killbill.Payment, any> = await api.getPaymentByTransactionId(paymentTransactionId, 'NONE');
    console.log(response.data);
  });

  test('Retrieve Payment by Transaction Key', async () => {
    console.log('Retrieve Payment by Transaction Key');
    const api: killbill.PaymentTransactionApi = new killbill.PaymentTransactionApi(config);

    const key= '37b95fef-f5be-4771-80e4-d41af8e528cb';

    const response: AxiosResponse<killbill.Payment, any> = await api.getPaymentByTransactionExternalKey(key,'NONE');
    console.log(response.data);
  });


});
