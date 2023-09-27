import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Create external charge', () => {

  test('Create external charge', async () => {
    console.log('Create external charge');
    const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);
    const accountId = 'b462d167-d9bc-459a-bdb7-23ebf99f5b76';
    const item: InvoiceItem = {amount: 10, itemType: "EXTERNAL_CHARGE","description":"external charge"};
    const items = [item];
    api.createExternalCharges(items, accountId, 'created_by');

  });

});
