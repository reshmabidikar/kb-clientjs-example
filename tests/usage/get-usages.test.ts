import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Get Usages', () => {

  test('Get Usage By Sub Id and Unit Type', async () => {
    console.log('Get Usage By Sub Id and Unit Type');
    const api: killbill.UsageApi = new killbill.UsageApi(config);

    const subscriptionId = 'dc89f346-bc55-46ee-8963-1b666d8fea50';
    const unitType = 'hours'
    const startDate = '2023-09-01';
    const endDate = '2023-09-30';

    const response: AxiosResponse<killbill.RolledUpUsage, any> = await api.getUsage(subscriptionId, unitType, startDate, endDate);
    console.log(response.data);

  });

  test('Get Usage By Sub Id ', async () => {
    console.log('Get Usage By Sub Id');
    const api: killbill.UsageApi = new killbill.UsageApi(config);

    const subscriptionId = 'dc89f346-bc55-46ee-8963-1b666d8fea50';
    const startDate = '2023-09-01';
    const endDate = '2023-09-30';

    const response: AxiosResponse<killbill.RolledUpUsage, any> = await api.getAllUsage(subscriptionId, startDate, endDate);
    console.log(response.data);

  });


});
