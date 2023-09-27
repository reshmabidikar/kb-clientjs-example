import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Commit invoice', () => {

  test('Commit invoice', async () => {
    console.log('Commit invoice');
    const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);
    const invoiceId = '926ff247-e220-4cf9-8829-c13e943e3809';
    api.commitInvoice(invoiceId, 'created_by');

  });

});
