import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('List Payment Methods', () => {

  test('List Payment Methods', async () => {
    console.log('List Payment Methods');
    const api: killbill.PaymentMethodApi = new killbill.PaymentMethodApi(config);

    const response: AxiosResponse<killbill.PaymentMethod[], any> = await api.getPaymentMethods();
    console.log(response.data);
  });

  test('Search Payment Methods', async () => {
    console.log('Search Payment Methods');
    const api: killbill.PaymentMethodApi = new killbill.PaymentMethodApi(config);

    const key= 'braintree';

    const response: AxiosResponse<killbill.PaymentMethod[], any> = await api.searchPaymentMethods(key);
    console.log(response.data);
  });


});
