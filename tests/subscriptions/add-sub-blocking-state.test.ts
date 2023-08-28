import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Add Blocking State', () => {

  test('Add Blocking State', async () => {
    console.log('Update Quantity');
    const api: killbill.SubscriptionApi = new killbill.SubscriptionApi(config);

    const blockingState: BlockingState = {stateName: "STATE1", service: "ServiceStateService", isBlockChange: true, isBlockEntitlement: false, isBlockBilling: false};
    const subscriptionId = 'b6000207-42fd-40ea-9c8e-297d9adc1574';

    api.addSubscriptionBlockingState(blockingState, subscriptionId, 'created_by');

  });

});
