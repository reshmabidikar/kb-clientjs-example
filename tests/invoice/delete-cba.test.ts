import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('delete cba item', () => {

  test('delete cba item', async () => {
    console.log('delete cba item');
    const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);
    const accountId = 'b462d167-d9bc-459a-bdb7-23ebf99f5b76';
    const invoiceId = 'd723f109-7c4d-470e-9267-995610b02b28';
    const invoiceItemId = '7b8d4e3e-0fa0-43fc-bac2-4a0147e9a185';
    api.deleteCBA(invoiceId, invoiceItemId, accountId, 'created_by');

  });

});
