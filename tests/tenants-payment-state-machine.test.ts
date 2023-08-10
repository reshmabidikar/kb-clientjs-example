import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
username: 'admin',
password: 'password',
apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Tenant Payment State Machine', () => {

  test('Insert Tenant Payment State Machine', async () => {
    console.log('Insert Payment State Machine');
    const api: killbill.TenantApi = new killbill.TenantApi(config);

    const plugin_name = 'demo_plugin';
    const body = '<xml>..</xml>'

    api.uploadPluginPaymentStateMachineConfig(body, plugin_name, 'created-by', 'reason', 'comment')
  });

  test('Retrieve Payment State Machine', async () => {
    console.log('Retrieve Payment State Machine');
    const api: killbill.TenantApi = new killbill.TenantApi(config);
    const plugin_name = 'demo_plugin';
    const response: AxiosResponse<killbill.TenantKeyValue, any> = await api.getPluginPaymentStateMachineConfig(plugin_name)
    console.log(response.data);
  });

  test('Delete Payment State Machine', async () => {
    console.log('Delete Payment State Machine');
    const api: killbill.TenantApi = new killbill.TenantApi(config);
    const plugin_name = 'demo_plugin';
    api.deletePluginPaymentStateMachineConfig(plugin_name, 'created-by', 'reason', 'comment')
  });


});
