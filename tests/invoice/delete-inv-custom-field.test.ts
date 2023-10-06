import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Delete Custom Field', () => {

  test('Delete Custom Field', async () => {
    console.log('Delete Custom Field');
     const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);

    const invoiceIdId = '800ca6d0-8c33-458c-bf1a-4de22e960441';

    const customField = '45ee24dd-cb1c-48a9-91a8-ecf5b76fd76b';
    const customFields = [customField];

    api.deleteInvoiceCustomFields(invoiceIdId, 'created_by', customFields);

  });

});
