var expect = require('expect');

var {generateMessage} = require('./message');



describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var testMessage = {
      from: 'Some Person',
      text: 'Some Message',
      createdAt: new Date().getTime()
    };
    var res = generateMessage(testMessage.from, testMessage.text);

    expect(res.createdAt).toBeA('number');
    expect(res).toInclude({from: testMessage.from,text: testMessage.text});
  });
});
