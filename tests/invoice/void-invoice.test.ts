import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('void invoice', () => {

  test('void invoice', async () => {
    console.log('void invoice');
    const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);
    const invoiceId = '926ff247-e220-4cf9-8829-c13e943e3809';
    api.voidInvoice(invoiceId, 'created_by');

  });

});
