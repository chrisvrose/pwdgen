const assert = require('assert');
const gen = require('../src');


describe('Randomness',function(){
    it('should be able to generate hex',function(){
        const res = gen()
        assert.strictEqual(typeof res,'string','Expected a string');
    })
    it('should be able to generate base64',function(){
        const res = gen(4, true);
        assert.strictEqual(typeof res,'string','Expected a string');
        assert.strictEqual(res[6],'=','Expected base64 padding to be present')
        assert.strictEqual(res[7],'=','Expected base64 padding to be present')
    })
    it('should give out different values each time',function(){
        const attempts = 255;

        let pass = gen(),newPass,isBroken=true,i;
        for(i=0;i<attempts;i++){
            newPass = gen();
            if(newPass===pass){
                pass=newPass;
            }else{
                isBroken=false;
                break;
            }
        }
        assert(!isBroken,`Rolling broken even after ${attempts} attempts`)
    })
})