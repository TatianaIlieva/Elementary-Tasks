import task2 from './task2.js';

const assert = chai.assert;

export default function task2Test(){
    describe("task2", function() {
        it("task2 4 numbers", function() {
            assert.equal(task2(3, 4, 5, 6), 42);
        });
      
        it("task2 4 numbers. First is a string", function() {
            assert.equal(task2("3", 4, 5, 6), 42);
        });

        it("task2 4 numbers. Second is a string", function() {
            assert.equal(task2(3, "4", 5, 6), 42);
        });

        it("task2 4 numbers. Third is a string", function() {
            assert.equal(task2(3, 4, "5", 6), 42);
        });

        it("task2 4 numbers. Third is a string", function() {
            assert.equal(task2(3, 4, 5, "6"), 42);
        });
        
        it("task2 4 numbers. First two are strings", function() {
            assert.equal(task2("3", "4", 5, 6), 42);
        });
        
        it("task2 4 numbers. Second two are strings", function() {
            assert.equal(task2(3, "4", "5", 6), 42);
        });        
        
        it("task2 4 numbers. Last two are strings", function() {
            assert.equal(task2(3, 4, "5", "6"), 42);
        });
        
        it("task2 4 numbers. First three are strings", function() {
            assert.equal(task2("3", "4", "5", 6), 42);
        });
        
        it("task2 4 numbers. Last three are strings", function() {
            assert.equal(task2(3, "4", "5", "6"), 42);
        });
                
        it("task2 4 numbers. All are strings", function() {
            assert.equal(task2("3", "4", "5", "6"), 42);
        });
    });
}
