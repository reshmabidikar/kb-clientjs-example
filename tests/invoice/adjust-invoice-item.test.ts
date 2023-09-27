import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('adjust invoice item', () => {

  test('adjust invoice item', async () => {
    console.log('adjust invoice item');
    const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);
    const item: InvoiceItem = {accountId: "b462d167-d9bc-459a-bdb7-23ebf99f5b76", invoiceId: "4f948961-90a9-427b-bfbf-7583bee86711",invoiceItemId:"3fd23760-11be-447d-8c91-9a22037ca239", amount:10, description: "free adjustment, good customer"};
    const invoiceId = '4f948961-90a9-427b-bfbf-7583bee86711';
    api.adjustInvoiceItem(item, invoiceId, 'created_by');

  });

});
