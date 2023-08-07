import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Tenant API tests', () => {
  test('Get list of tenants', async () => {
    console.log('Get list of tenants');
    const api: killbill.TenantApi = new killbill.TenantApi(config);
    const respone: AxiosResponse<killbill.Tenant, any> = await api.getTenantByApiKey('bob');
    console.log(respone.data);
  });
});
