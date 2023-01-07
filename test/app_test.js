const {
    request
} = require('graphql-request');
const chai = require('chai');
const mocha = require('mocha');

describe('Product', () => {
    it('Get All Product', async () => {
        const query = `
        query {
          products {
            id
            name
          }
        }
      `;

        const {
            products
        } = await request('http://localhost:4000/graphql', query);


        chai.expect(products).to.be.an('array');
    });
});