import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Create migration invoice', () => {

  test('Create migration invoice', async () => {
    console.log('Create migration invoice');
    const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);
    const accountId = 'b462d167-d9bc-459a-bdb7-23ebf99f5b76';
    const item: InvoiceItem = {amount: 10, itemType: "EXTERNAL_CHARGE","description":"a migration item"};
    const items = [item];
    api.createMigrationInvoice(items, accountId, 'created_by');

  });

});
