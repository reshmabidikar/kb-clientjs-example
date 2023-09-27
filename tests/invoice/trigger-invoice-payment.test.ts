import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Trigger invoice payment', () => {

  test('Trigger invoice payment', async () => {
    console.log('Trigger invoice payment');
    const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);
    const accountId = 'ceaa4c46-723e-4229-ba77-c8656572e8ea';
    const invoiceId = '80825f6b-dc95-46f9-8e7e-ac16bf658f81';
    const invoicePayment: InvoicePayment = {accountId: accountId, targetInvoiceId: invoiceId, purchasedAmount:100};
    api.createInstantPayment(invoicePayment, invoiceId, 'created_by');
  });



});
