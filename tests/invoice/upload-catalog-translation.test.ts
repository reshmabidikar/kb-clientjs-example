import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Add Catalog Translation', () => {

  test('Add Catalog Translation', async () => {
    console.log('Add Catalog Translation');
    const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);

    const locale = 'fr_FR';
    const deleteIfExists = true;
    const body = 'sports-monthly = Voiture Sport';

    api.uploadCatalogTranslation(body, locale, 'created_by', deleteIfExists);
  });

  test('Add Invoice Translation', async () => {
    console.log('Add Invoice Translation');
    const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);

    const locale = 'fr_FR';
    const deleteIfExists = true;
    const body = 'invoiceDate = date de facture';

    api.uploadInvoiceTranslation(body, locale, 'created_by', deleteIfExists);
  });

  test('Add Invoice MP Template', async () => {
    console.log('Add Invoice MP Template');
    const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);

    const deleteIfExists = true;
    const body = 'Some HTML String';

    api.uploadInvoiceMPTemplate(body, 'created_by', deleteIfExists);
  });

  test('Add Invoice Template', async () => {
    console.log('Add Invoice Template');
    const api: killbill.InvoiceApi = new killbill.InvoiceApi(config);

    const deleteIfExists = true;
    const body = 'Some HTML String';

    api.uploadInvoiceTemplate(body, 'created_by', deleteIfExists);
  });


});
