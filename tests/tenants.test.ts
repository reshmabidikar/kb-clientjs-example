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
  test('Tenant by API key', async () => {
    console.log('Tenant by API key');
    const api: killbill.TenantApi = new killbill.TenantApi(config);
    const apiKey = 'bob'
    const response: AxiosResponse<killbill.Tenant, any> = await api.getTenantByApiKey(apiKey);
    console.log(response.data);
  });

  test('Tenant By Id', async () => {
    console.log('Tenant By Id');
    const api: killbill.TenantApi = new killbill.TenantApi(config);
    const id='9ab7db57-02a9-430c-bdfa-0a8c24d2e368'
    const response: AxiosResponse<killbill.Tenant, any> = await api.getTenant(id);
    console.log(response.data);
  });

//   test('Create Tenant', async () => {
//     console.log('Create Tenant');
//     const api: killbill.TenantApi = new killbill.TenantApi(config);
//     const tenant: killbill.Tenant = {apiKey: `js_tenant`, apiSecret: `js_tenant`};
// //     api.createTenant(tenant, 'created-by')
// //     .then(result => console.log(result.data))
// //     .catch(error => console.log(error));
//     const response: AxiosResponse<killbill.Tenant, any> = await api.createTenant(tenant, 'created-by');
//     console.log(response.data);
//   });

//   test('Create Tenant', async () => {
//     console.log('Create Tenant');
//     const api: killbill.TenantApi = new killbill.TenantApi(config);
//     const tenant: killbill.Tenant = {apiKey: `js_tenant1`, apiSecret: `js_tenant1`};
//     const respone: AxiosResponse<killbill.Tenant, any> = await api.createTenant(tenant, 'created-by');
//     console.log(respone.data);
//   });


});
