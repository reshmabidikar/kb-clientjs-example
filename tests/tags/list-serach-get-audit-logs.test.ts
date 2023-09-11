import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Get Tags', () => {

  test('Get Tags', async () => {
    console.log('Get Tags');
    const api: killbill.TagApi = new killbill.TagApi(config);

    const response: AxiosResponse<killbill.Tag[], any> = await api.getTags();
    console.log(response.data);

  });

  test('Search Tags ', async () => {
    console.log('Search Tags');
    const api: killbill.TagApi = new killbill.TagApi(config);

    const searchKey = '__PARK__';

    const response: AxiosResponse<killbill.Tag[], any> = await api.searchTags(searchKey);
    console.log(response.data);

  });

  test('Get Audit Logs ', async () => {
    console.log('Get Audit Logs');
    const api: killbill.TagApi = new killbill.TagApi(config);

    const tagId = '4c484114-07cd-4f81-9558-f57ada4858f6';

    const response: AxiosResponse<killbill.AuditLog[], any> = await api.getTagAuditLogsWithHistory(tagId);
    console.log(response.data);

  });


});
