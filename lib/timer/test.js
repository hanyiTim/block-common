const timer = require('./index.js');
const expect = require('chai').expect;

describe('测试 timer',()=>{
    it('formatTimeStamp',()=>{
        expect(timer.formatTimeStamp(Date.now(),'YY-mm-dd'));
    });
    it('countDown',()=>{
        expect(timer.countDown(Date.now()+100*1000,":"))
        .to.be.equal("00:01:40");
    })
})