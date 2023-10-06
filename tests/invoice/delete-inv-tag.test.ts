import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Add Custom Field', () => {

  test('Add Custom Field', async () => {
    console.log('Add Custom Field');
    const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);

    const invoiceIdId = '800ca6d0-8c33-458c-bf1a-4de22e960441';

    const tagDefIds = ['00000000-0000-0000-0000-000000000004'];

    api.deleteInvoiceTags(invoiceIdId, 'created_by', tagDefIds);

  });

});
