import _chai from 'chai';
import _characterFold from '../js/character-fold.js';
import _mocha from 'mocha';

_mocha.describe('characterFold', () => {
    _mocha.it('should be a function', () => {
        _chai.expect(_characterFold).to.be.a('function');
    });

    _mocha.it('should replace special characters', () => {
        _chai.expect(_characterFold('ŧęṧᵵṨⓣȑïȵɠ')).to.equal('testString');
    });

    _mocha.it('should replace combining characters', () => {
        _chai.expect(_characterFold('t̴̷̴͉̝͓̯̳̙̜̙̥̪͎̺͇̉̔ͩ̂̌͗ͥ̚͜ȩ̢̭̜̖͚̻̹̗̭̪̹̮̙̺͇͙̿́̉̿̃͑̀͊ͦ̿̕ͅş̵̧̣̻͉͚̪͖̪̩̰̟̗͓̜͈̲̘͙̏͂͂̑̄͘͝ͅt̷̨̠͓̗͙͙̼̯̗̲̼̯̳̞̺̝͓̺͑̌ͩͯ̅̇͋͒̊̌́́̃̓Sͨ̿ͣ̈͏̡̬͖̣̹̹̩̙͖̮̭̪̻̹ţ̸̫̟̫̭̮̼͇̳̠͇̘̲͕͑̀ͪ͋ͦͦͣ̄̋̕͡r̈́ͮͧ̒̑̔ͫ̑͗̾͒̋̉̐ͤ̚͏̻̘̱į̭̝͇̯̭̗̻̘̼̯̻̓̅͐ͮ̅͆͒̌ͬ̊̊̉ͦ̌ͯ̋̆̃̓͢n̵̛͇̙̱̱̜̦̗̬̝̼̩̯̳̫͖̰̱̊ͦͭ̀̔ͧ̏͑̑͑̇͑̔̾̈͗̔͡g̷̐̒ͯ͌̇ͩ̎͜͏̘̻̫̼̳̤̲̠̝̮̦̦̦͕͎͙̜')).to.equal('testString');
    });
});
