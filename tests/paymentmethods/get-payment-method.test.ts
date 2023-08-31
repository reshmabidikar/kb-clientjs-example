import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Retrieve Payment Method', () => {

  test('Retrieve Payment Method by Id', async () => {
    console.log('Retrieve Payment Method by Id');
    const api: killbill.PaymentMethodApi = new killbill.PaymentMethodApi(config);

    const paymentMethodId = '83fc2425-ede3-4fbd-b117-2eff4c660cfe';

    const response: AxiosResponse<killbill.PaymentMethod, any> = await api.getPaymentMethod(paymentMethodId, 'NONE');
    console.log(response.data);
  });

  test('Retrieve Payment Method by Key', async () => {
    console.log('Retrieve Payment Method by Key');
    const api: killbill.PaymentMethodApi = new killbill.PaymentMethodApi(config);

    const key= '83fc2425-ede3-4fbd-b117-2eff4c660cfe';

    const response: AxiosResponse<killbill.PaymentMethod, any> = await api.getPaymentMethodByKey(key,'NONE');
    console.log(response.data);
  });


});
