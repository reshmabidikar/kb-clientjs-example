import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Get Translations', () => {

  test('Get Catalog Translation', async () => {
    console.log('Get Catalog Translation');
    const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);

    const locale = 'fr_FR';
    const response: AxiosResponse = await api.getCatalogTranslation(locale);
    console.log(response.data);

  });

  test('Get Invoice Translation', async () => {
    console.log('Get Invoice Translation');
    const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);

    const locale = 'fr_FR';
    const response: AxiosResponse = await api.getInvoiceTranslation(locale);
    console.log(response.data);

  });

  test('Get Invoice MP Template', async () => {
    console.log('Get Invoice MP Template');
    const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);

    const locale = 'fr_FR';
    const response: AxiosResponse = await api.getInvoiceMPTemplate(locale);
    console.log(response.data);

  });

  test('Get Invoice Template', async () => {
    console.log('Get Invoice Template');
    const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);

    const response: AxiosResponse = await api.getInvoiceTemplate();
    console.log(response.data);

  });

});
