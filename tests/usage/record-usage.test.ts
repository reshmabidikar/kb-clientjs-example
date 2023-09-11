import * as killbill from 'killbill';
import {describe, test} from "vitest";
import {AxiosResponse} from "axios";

const config: killbill.Configuration = new killbill.Configuration({
  username: 'admin',
  password: 'password',
  apiKey: killbill.apiKey('bob', 'lazar'),
  basePath: 'http://localhost:8080',
});

describe('Record Usage', () => {

  test('Record Usage', async () => {
    console.log('Record Usage');
    const api: killbill.UsageApi = new killbill.UsageApi(config);

    const usageRecord: UsageRecord = {amount: 4, recordDate: "2023-09-17"};
    const unitUsageRecord: UnitUsageRecord = {unitType: "hours", usageRecords:[usageRecord]};
    const subscriptionUsageRecord: SubscriptionUsageRecord = {subscriptionId: "dc89f346-bc55-46ee-8963-1b666d8fea50", unitUsageRecords: [unitUsageRecord]};

    api.recordUsage(subscriptionUsageRecord, 'created_by');

  });

});
