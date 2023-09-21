import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Trigger payment', () => {

  test('Trigger payment', async () => {
    console.log('Trigger payment');
    const api: killbill.AdminApi = new killbill.AdminApi(config);

    api.triggerInvoiceGenerationForParkedAccounts('created_by');

  });

});
