import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Retrieve', () => {

  test('Get All Tag Definitions', async () => {
    console.log('Get All Tag Definitions');
    const api: killbill.TagDefinitionApi = new killbill.TagDefinitionApi(config);

    const response: AxiosResponse<killbill.TagDefinition[], any> = await api.getTagDefinitions();
    console.log(response.data);

  });

  test('Get Tag Definition by Id', async () => {
    console.log('Get Tag Definition by Id');
    const api: killbill.TagDefinitionApi = new killbill.TagDefinitionApi(config);

    const tagDefinitionId = 'f27312df-4e8f-43c8-97aa-47c2b65c4152';

    const response: AxiosResponse<killbill.TagDefinition, any> = await api.getTagDefinition(tagDefinitionId);
    console.log(response.data);

  });

  test('Get Logs', async () => {
    console.log('Get Logs');
    const api: killbill.TagDefinitionApi = new killbill.TagDefinitionApi(config);

    const tagDefinitionId = 'f27312df-4e8f-43c8-97aa-47c2b65c4152';

    const response: AxiosResponse<killbill.AuditLog[], any> = await api.getTagDefinitionAuditLogsWithHistory(tagDefinitionId);
    console.log(response.data);

  });


});
