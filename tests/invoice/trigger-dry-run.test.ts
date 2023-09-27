import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Generate dry run invoice', () => {

  test('Generate dry run invoice', async () => {
    console.log('Generate dry run invoice');
    const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);
    const accountId = 'a24a1b9f-9d0f-4311-ad05-feac80f7b177';
    const targetDate = '2023-10-26';
    const invoiceDryRun: InvoiceDryRun = {dryRunType: "UPCOMING_INVOICE"};
    const response: AxiosResponse = await api.generateDryRunInvoice(invoiceDryRun, accountId, 'created_by', targetDate);
    console.log(response.data);
  });

});
