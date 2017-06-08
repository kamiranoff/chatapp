const expect = require('expect');
const { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    console.log(generateMessage);
    const msg = generateMessage('Aphrodite', 'Hello mortal');

    expect(msg.from).toEqual('Aphrodite');
    expect(msg.text).toEqual('Hello mortal');
    expect(msg.createdAt).toBeA('number');
  });
});