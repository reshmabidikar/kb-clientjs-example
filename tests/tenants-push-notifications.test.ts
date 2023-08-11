import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
username: 'admin',
password: 'password',
apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Tenant Push Notifications', () => {
// This has an issue: See https://github.com/killbill/killbill-client-js/issues/146

 // test('Insert Tenant Push Notifications', async () => {
    //console.log('Insert Push Notifications');
    //const api: killbill.TenantApi = new killbill.TenantApi(config);

    //const cb = 'http://demo/callmeback';

    //api.registerPushNotificationCallback('created-by', cb, 'reason', 'comment')
 // });

  test('Retrieve Push Notification CallBack', async () => {
    console.log('Push Notification CallBack');
    const api: killbill.TenantApi = new killbill.TenantApi(config);
    const response: AxiosResponse<killbill.TenantKeyValue, any> = await api.getPushNotificationCallbacks()
    console.log(response.data);
  });

  test('Delete Push Notification Callback', async () => {
    console.log('Delete Push Notification Callback');
    const api: killbill.TenantApi = new killbill.TenantApi(config);
    api.deletePushNotificationCallbacks('created-by', 'reason', 'comment')
  });

});
