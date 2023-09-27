import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Get Invoice Group', () => {

  test('Get Invoice Group', async () => {
    console.log('Get Invoice Group');
    const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);
    const accountId = '8452df66-ded8-4fba-b7dc-50302d19bc5b';
    const groupId = 'ad2921d2-a343-4115-9a51-32288f49e6f0';
    const response: AxiosResponse<killbill.Invoice[], any> = await api.getInvoicesGroup(groupId, accountId);
    console.log(response.data);
  });

  test('Get Invoice Payments', async () => {
    console.log('Get Invoice Payments');
    const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);
    const invoiceId = '80825f6b-dc95-46f9-8e7e-ac16bf658f81';
    const response: AxiosResponse<killbill.InvoicePayment[], any> = await api.getPaymentsForInvoice(invoiceId);
    console.log(response.data);
  });

});
