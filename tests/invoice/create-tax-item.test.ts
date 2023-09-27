import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Create tax item', () => {

  test('Create tax item', async () => {
    console.log('Create tax item');
    const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);
    const accountId = 'b462d167-d9bc-459a-bdb7-23ebf99f5b76';
    const item: InvoiceItem = {amount: 10, itemType: "TAX","description":"a tax item"};
    const items = [item];
    api.createTaxItems(items, accountId, 'created_by');

  });

});
