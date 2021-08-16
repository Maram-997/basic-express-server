const supertest = require('supertest');
const { server } = require('../src/server');

const request = supertest(server);

describe('Basic-Express-Server', () => {
    it('Should check person route', async () => {
        // arrange
        let status = 200;
        let param = '/person'
        // act
        const response = await request.get(param);
        // assert 
        expect(response.status).toBe(status);
        expect(typeof response.body).toEqual('object');
    })
    it('Should check 404 error', async () => {
        // arange
        let param = '/notfound';
        let status = 404;
        // act
        const response = await request.get(param);
        // assert 
        expect(response.status).toBe(status);
    })
    it('Should check 500 error', async () => {
        // arange
        let param = '/badConnection';
        let status = 500;
        // act
        const response = await request.get(param);
        // assert 
        expect(response.status).toBe(status);
    })
})