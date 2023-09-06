import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Get Audit logs', () => {

  test('Get Audit logs', async () => {
    console.log('Get Audit logs');
    const api: killbill.PaymentTransactionApi = new killbill.PaymentTransactionApi(config);

    const paymentTransactionId = '8dabaa02-c926-4ec3-b0bb-47fe2271b62f';

    const response: AxiosResponse<killbill.AuditLog[], any> = await api.getTransactionAuditLogsWithHistory(paymentTransactionId);
    console.log(response.data);
  });

});
