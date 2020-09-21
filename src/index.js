const {argv} = require('yargs')
    .option('size',{
        alias:'s',
        default:128,
        description:'Size of password'
    })
    .option('symbols',{
        alias:'b',
        type:'boolean',
        description:'have symbols'
    });

const {size,symbols} = argv;
const gen = require('./gen');
if (require.main === module) {
    console.log(gen(size,symbols));
}

module.exports = gen