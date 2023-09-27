import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Get Invoices', () => {

  test('Get Invoice by Id', async () => {
    console.log('Get Invoice by Id');
    const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);
    const invoiceId = 'fd9df8b8-f845-43a1-8fe8-73a8269c5bcc';
    const response: AxiosResponse<killbill.Invoice, any> = await api.getInvoice(invoiceId);
    console.log(response.data);
  });

  test('Get Invoice by Number', async () => {
    console.log('Get Invoice by Number');
    const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);
    const invoiceNumber = 7463;
    const response: AxiosResponse<killbill.Invoice, any> = await api.getInvoiceByNumber(invoiceNumber);
    console.log(response.data);
  });

  test('Get Invoice by Item Id', async () => {
    console.log('Get Invoice by Item Id');
    const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);
    const invoiceItemId = 'ed7e1b5d-ed43-41bf-99ca-85ff2c88462d';
    const response: AxiosResponse<killbill.Invoice, any> = await api.getInvoiceByItemId(invoiceItemId);
    console.log(response.data);
  });

  test('Get Invoice HTML', async () => {
    console.log('Get Invoice HTML');
    const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);
    const invoiceId = 'fd9df8b8-f845-43a1-8fe8-73a8269c5bcc';
    const response: AxiosResponse = await api.getInvoiceAsHTML(invoiceId);
    console.log(response.data);
  });

});
