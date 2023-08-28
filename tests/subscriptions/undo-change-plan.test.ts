import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Undo Change Plan', () => {

  test('Undo Change Plan', async () => {
    console.log('Undo Change Plan');
    const api: killbill.SubscriptionApi = new killbill.SubscriptionApi(config);

    const subscriptionId= '1664777f-f194-48fd-a274-e883063790b1';

    api.undoChangeSubscriptionPlan(subscriptionId, 'created-by', null, 'reason','comment');

  });




});
