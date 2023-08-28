import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Create Subscription', () => {

  test('Create Subscription', async () => {
    console.log('Create Subscription');
    const api: killbill.SubscriptionApi = new killbill.SubscriptionApi(config);

    const base1: Subscription = {planName: "pistol-monthly", accountId: "04779ade-11f9-48d1-88a1-a63be84d1cb7"};
    const addon1: Subscription = {planName: "cleaning-monthly", accountId: "04779ade-11f9-48d1-88a1-a63be84d1cb7"};
    const subscriptions1 = [base1, addon1];
    const bulkSubBundle1: BulkSubscriptionsBundle = {baseEntitlementAndAddOns: subscriptions1};

    const base2: Subscription = {planName: "shotgun-monthly", accountId: "04779ade-11f9-48d1-88a1-a63be84d1cb7"};
    const addon2: subscription = {planName: "telescopic-scope-monthly", accountId: "04779ade-11f9-48d1-88a1-a63be84d1cb7"};
    const subscriptions2 = [base2, addon2];
    const bulkSubBundle2: BulkSubscriptionsBundle = {baseEntitlementAndAddOns: subscriptions2};

    const bulkSubscriptionBundles = [bulkSubBundle1, bulkSubBundle2];

    api.createSubscriptionsWithAddOns(bulkSubscriptionBundles, 'created_by');

  });

});
