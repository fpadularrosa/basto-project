const session = require('supertest-session');
const server = require('../../src/server.js');
const { Cow } = require('../../src/models/Cow.schema.js');

const agent = session(server);
const coww = {
  idSenasa: '76565kssjja23456',
  type: 'dificil',
  animalWeight: '',
  pasture: 'calabaza',
  dispositiveNumber: '',
  dispositiveType: '',
};

describe('Cow routes', () => {
  describe('GET /cows', () => {
    it('You should return an error if you have nothing the cow', (done)=>{
        Cow.create({})
          .then(() => done(new Error('It requires attributes')))
          .catch(() => done());
          agent.get('/cows').expect(404)
      }
    )
    it('If they send pasture for query, you should receive cows with that pasture', () => {
      agent.get('/cows?pasture=calabaza')
      .expect(res => res.body.to.eql(coww))
    })
  });
});