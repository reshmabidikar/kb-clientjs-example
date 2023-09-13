import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Delete Tag Definition', () => {

  test('Delete Tag Definition', async () => {
    console.log('Delete Tag Definition');
    const api: killbill.TagDefinitionApi = new killbill.TagDefinitionApi(config);

    const tagDefinitionId = '96f4933f-96b2-4268-a8ee-2d40734b6115';

    api.deleteTagDefinition(tagDefinitionId, 'created_by');

  });

});
