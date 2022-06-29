import task1 from './task1.js';

const assert = chai.assert;

export default function task1Test(){
    describe("task1", function() {
        it("task1 2 numbers and a string", function() {
            assert.equal(task1(3, 4, "x"));
        });
      
        it("task1 2 numbers(first is a string) and a string", function() {
            assert.equal(task1('2', 3, "x"));
        });

        it("task1 2 numbers(second is a string) and a string", function() {
            assert.equal(task1(3, "4", "x"));
        });
        
        it("task1 2 numbers and a string. All are strings", function() {
            assert.equal(task1("23", "4", "x"));
        });  
    });
}
