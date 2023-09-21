import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Update payment state', () => {

  test('Update payment state', async () => {
    console.log('Update payment state');
    const api: killbill.AdminApi = new killbill.AdminApi(config);
    const paymentId = '770d7802-9e03-45dc-a16a-dc58ddcb44d1';
    const paymentTransactionId = 'f20e1bca-8c3e-4a8f-b411-27f4362f858b';

    const adminPayment: AdminPayment = {transactionStatus: "PAYMENT_FAILURE"};

    api.updatePaymentTransactionState(adminPayment, paymentId, paymentTransactionId, 'created_by');

  });

});
