import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Create Tag Definition', () => {

  test('Create Tag Definition', async () => {
    console.log('Create Tag Definition');
    const api: killbill.TagDefinitionApi = new killbill.TagDefinitionApi(config);

    const applicableObjectTypes = ['INVOICE', 'TENANT'];
    const tagDefinition: TagDefinition = {name: "tag_name", description: "tag description", "isControlTag": false, "applicableObjectTypes":applicableObjectTypes};

    api.createTagDefinition(tagDefinition, 'created_by');

  });

});
