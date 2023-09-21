import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Invalidate cache', () => {

  test('Invalidate cache', async () => {
    console.log('Invalidate cache');
    const api: killbill.AdminApi = new killbill.AdminApi(config);

    api.invalidatesCache();

  });

  test('Invalidate cache by account', async () => {
    console.log('Invalidate cache by account');
    const api: killbill.AdminApi = new killbill.AdminApi(config);

    const accountId = '7958908b-040a-4e2c-9606-4f1f62ac1c33';

    api.invalidatesCacheByAccount(accountId);

  });

  test('Invalidate cache by tenant', async () => {
    console.log('Invalidate cache by tenant');
    const api: killbill.AdminApi = new killbill.AdminApi(config);

    api.invalidatesCacheByTenant();

  });

  test('Put host in rotation', async () => {
    console.log('Put host in rotation');
    const api: killbill.AdminApi = new killbill.AdminApi(config);

    api.putInRotation();

  });

  test('Put host out of rotation', async () => {
    console.log('Put host out of rotation');
    const api: killbill.AdminApi = new killbill.AdminApi(config);

    api.putOutOfRotation();

  });

  test('Get queue entries', async () => {
    console.log('Get queue entries');
    const api: killbill.AdminApi = new killbill.AdminApi(config);

    api.getQueueEntries();

  });

});
