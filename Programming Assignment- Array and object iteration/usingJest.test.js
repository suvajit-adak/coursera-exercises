const {default : testRunner } = require('jest-runner')
const addFive = require(`./usingJest`)

test('returns the number after added to 5', ()=>{
    expect(addFive(1)).toBe(6);
})