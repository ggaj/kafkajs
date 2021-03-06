const RequestV1Protocol = require('./request')

describe('Protocol > Requests > DescribeGroups > v1', () => {
  test('request', async () => {
    const { buffer } = await RequestV1Protocol({
      groupIds: [
        'consumer-group-id-4de0aa10ef94403a397d-53384-d2fee969-1446-4166-bc8e-c88e8daffdfe',
      ],
    }).encode()

    expect(buffer).toEqual(Buffer.from(require('../fixtures/v1_request.json')))
  })
})
