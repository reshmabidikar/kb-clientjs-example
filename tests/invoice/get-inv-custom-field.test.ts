import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Get Custom Field', () => {

  test('Get Custom Field', async () => {
    console.log('Get Custom Field');
    const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);

    const invoiceIdId = '800ca6d0-8c33-458c-bf1a-4de22e960441';
    const audit = 'NONE';

    const response: AxiosResponse<killbill.CustomField[], any> = await api.getInvoiceCustomFields(invoiceIdId, audit, 'created_by');
    console.log(response.data);

  });

});
