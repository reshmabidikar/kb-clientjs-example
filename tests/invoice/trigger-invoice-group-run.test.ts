import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Generate invoice group run', () => {

  test('Generate invoice group run', async () => {
    console.log('Generate invoice group run');
    const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);
    const accountId = '8452df66-ded8-4fba-b7dc-50302d19bc5b';
    const targetDate = '2024-02-22';
    api.createFutureInvoiceGroup(accountId, 'created_by', targetDate);
  });

});
