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
    const api: killbill.PaymentMethodApi = new killbill.PaymentMethodApi(config);

    const paymentMethodId = '06e5c871-3caf-41c2-9d7e-30c95f6e309c';

    const response: AxiosResponse<killbill.AuditLog[], any> = await api.getPaymentMethodAuditLogsWithHistory(paymentMethodId);
    console.log(response.data);
  });

});
