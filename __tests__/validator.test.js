const { describe, beforeEach } = require('@jest/globals');
const validator = require('../src/middlewares/validator');


describe('validator middleware', () => {
    let consoleSpy;
    let req = {};
    let res = {};
    let next = jest.fn();


    // beforeEach(() => {
    //     consoleSpy = jest.spyOn(console, 'log').mockImplementation(); 
         
    // });
    // afterEach(() => {
    //     consoleSpy.mockRestore();

    // });
    it('should move to the next middleware if we have a name', () => {
        validator(req, res, next);
        expect(next).toHaveBeenCalledWith();
    });
})
    it('should throw next with error message', () => {
        validator(req, res, next);
        expect(next).toHaveBeenCalledWith('Enter your name!');
    });
//})