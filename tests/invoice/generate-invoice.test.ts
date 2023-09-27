import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Generate invoice', () => {

  test('Generate invoice', async () => {
    console.log('Generate invoice');
    const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);
    const accountId = 'b462d167-d9bc-459a-bdb7-23ebf99f5b76';
    const targetDate = '2023-10-21';
    api.createFutureInvoice(accountId, 'created_by', targetDate);

  });

});
