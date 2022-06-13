const { Cow } = require('../../src/models/Cow.schema.js');
const { expect } = require('chai');

describe('Cow model', () => {
  describe('Validators', () => {
    describe('name', () => {
      it('should throw an error if Cow is empty', (done) => {
        Cow.create({})
          .then(() => done(new Error('It requires type, animal weight, pasture and other props')))
          .catch(() => done());
      });
      it('should work when its have props required', () => {
        Cow.create({ idSenasa: '3744937llgg12344', type: 'Vaquillona', animalWeight: 222, pasture: 'pasture', dispositiveNumber: 'jsuj3333', dispositiveType: 'COLLAR' });
      });
    },
    describe('Mandatory attributions', () => {
      it('I should return an error if I dont pass the required attributes.' , (done) => {
        Cow.create({ idSenasa: '3744937llgg12344', type: 'Vaquillona', pasture: 'pasture' })
        .then(() => done(new Error('Need the mandatory attributions')))
        .catch(() => done());
      })
    }),
    );
  });
});