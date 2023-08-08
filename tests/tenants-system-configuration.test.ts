import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
username: 'admin',
password: 'password',
apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Tenant System Configuration', () => {

  test('Insert Tenant System Configuration', async () => {
    console.log('Insert Tenant System Configuration');
    const body = '{"org.killbill.invoice.sanitySafetyBoundEnabled":"false"}';
    const api: killbill.TenantApi = new killbill.TenantApi(config);
    api.uploadPerTenantConfiguration(body, 'created-by')
  });

  test('Retrieve System Configuaration', async () => {
    console.log('Retrieve System Configuaration');
    const api: killbill.TenantApi = new killbill.TenantApi(config);
    const response: AxiosResponse<killbill.TenantKeyValue, any> = await api.getPerTenantConfiguration()
    console.log(response.data);
  });

  test('Delete System Configuration', async () => {
    console.log('Delete System Configuration');
    const api: killbill.TenantApi = new killbill.TenantApi(config);
    api.deletePerTenantConfiguration('created-by')
  });


});
