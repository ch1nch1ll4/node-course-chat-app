var expect = require('expect');

var {generateMessage, generateLocation} = require('./message');


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


describe('generateLocation', () => {
  it('should generate correct location object', () => {
    var testLoc = {
      from: 'Some Person',
      latitude: '3445',
      longitude: '2341'
    };
    var url = `https://www.google.com/maps?q=${testLoc.latitude},${testLoc.longitude}`
    var res = generateLocation(testLoc.from, testLoc.latitude, testLoc.longitude)

    expect(res.createdAt).toBeA('number');
    expect(res).toInclude({from: testLoc.from, url});
  });
})
