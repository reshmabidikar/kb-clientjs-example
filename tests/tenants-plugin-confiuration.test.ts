import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
username: 'admin',
password: 'password',
apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Tenant Plugin Configuration', () => {

  test('Insert Tenant Plugin Configuration', async () => {
    console.log('Insert Tenant Plugin Configuration');
    const api: killbill.TenantApi = new killbill.TenantApi(config);

    const plugin_name = 'demo_plugin';
    const body = 'tenant_config'

    const response: AxiosResponse<killbill.TenantKeyValue, any> =  await api.uploadPluginConfiguration(body, plugin_name, 'created-by', 'reason', 'comment');
    console.log(response.data);
  });

  test('Retrieve Plugin Configuaration', async () => {
    console.log('Retrieve Plugin Configuaration');
    const api: killbill.TenantApi = new killbill.TenantApi(config);
    const plugin_name = 'demo_plugin';
    const response: AxiosResponse<killbill.TenantKeyValue, any> = await api.getPluginConfiguration(plugin_name)
    console.log(response.data);
  });

  test('Delete Plugin Configuration', async () => {
    console.log('Delete Plugin Configuration');
    const api: killbill.TenantApi = new killbill.TenantApi(config);
    const plugin_name = 'demo_plugin';
    api.deletePluginConfiguration(plugin_name, 'created-by', 'reason', 'comment')
  });


});
