import chai from 'chai';
import characterFold from '../js/character-fold.js';
import mocha from 'mocha';

mocha.describe('characterFold', () => {
    mocha.it('should be a function', () => {
        chai.expect(characterFold).to.be.a('function');
    });

    mocha.it('should replace special characters', () => {
        chai.expect(characterFold('ŧęṧᵵṨⓣȑïȵɠ')).to.equal('testString');
    });

    mocha.it('should replace combining characters', () => {
        chai.expect(characterFold('t̴̷̴͉̝͓̯̳̙̜̙̥̪͎̺͇̉̔ͩ̂̌͗ͥ̚͜ȩ̢̭̜̖͚̻̹̗̭̪̹̮̙̺͇͙̿́̉̿̃͑̀͊ͦ̿̕ͅş̵̧̣̻͉͚̪͖̪̩̰̟̗͓̜͈̲̘͙̏͂͂̑̄͘͝ͅt̷̨̠͓̗͙͙̼̯̗̲̼̯̳̞̺̝͓̺͑̌ͩͯ̅̇͋͒̊̌́́̃̓Sͨ̿ͣ̈͏̡̬͖̣̹̹̩̙͖̮̭̪̻̹ţ̸̫̟̫̭̮̼͇̳̠͇̘̲͕͑̀ͪ͋ͦͦͣ̄̋̕͡r̈́ͮͧ̒̑̔ͫ̑͗̾͒̋̉̐ͤ̚͏̻̘̱į̭̝͇̯̭̗̻̘̼̯̻̓̅͐ͮ̅͆͒̌ͬ̊̊̉ͦ̌ͯ̋̆̃̓͢n̵̛͇̙̱̱̜̦̗̬̝̼̩̯̳̫͖̰̱̊ͦͭ̀̔ͧ̏͑̑͑̇͑̔̾̈͗̔͡g̷̐̒ͯ͌̇ͩ̎͜͏̘̻̫̼̳̤̲̠̝̮̦̦̦͕͎͙̜')).to.equal('testString');
    });
});
