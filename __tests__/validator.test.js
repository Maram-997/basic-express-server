const { describe, beforeEach } = require('@jest/globals');
const validator = require('../src/middlewares/validator');


describe('validator middleware', () => {
    // let consoleSpy;
    let req = {};
    let res = {sendStatus: jest.fn()};
    let next = jest.fn();
    let mockFn;
    let data = req.query.name

    beforeEach(() => {
        // consoleSpy = jest.spyOn(console, 'log')
        mockFn =  jest.fn().mockImplementation(() =>{
            res = data
        })
    });
    afterEach(() => {
        consoleSpy.mockRestore();

    });
    it('should move to the next middleware', () => {
        validator(req, res, next);
        expect(next).toHaveBeenCalledWith();
    });
})