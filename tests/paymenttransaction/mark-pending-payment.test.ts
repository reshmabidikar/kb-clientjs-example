import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Mark pending payment', () => {

  test('Mark pending payment', async () => {
    console.log('Mark pending payment');
    const api: killbill.PaymentTransactionApi = new killbill.PaymentTransactionApi(config);

    const payment_transaction: PaymentTransaction = {paymentId: "e129a8fc-c244-425f-b1eb-68d3aac7054e", status: "SUCCESS"};
    const paymentTransactionId = '8dabaa02-c926-4ec3-b0bb-47fe2271b62f';

    api.notifyStateChanged(payment_transaction, paymentTransactionId, 'created_by');

  });

});
