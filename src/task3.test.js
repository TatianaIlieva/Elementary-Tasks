import task3 from './task3.js';

const assert = chai.assert;

export default function task3Test(){
    describe("task3", function() {

        it("task3 3 numbers", function() {
            assert.equal(task3(2, 3, 4), 9);
        });
      
        it("task3 3 numbers. First is a string", function() {
            assert.equal(task3("2", 3, 4), 234);
        });

        it("task3 3 numbers. Second is a string", function() {
            assert.equal(task3(2, "3", 4), 234);
        });

        it("task3 3 numbers. Third is a string", function() {
            assert.equal(task3(2, 3, "4"), 54);
        });
        
        it("task3 3 numbers. First two  are strings", function() {
            assert.equal(task3("2", "3", 4), 234);
        });  
        
        it("task3 3 numbers. Last two are strings", function() {
            assert.equal(task3(2, "3", "4"), 234);
        });  
        
        it("task3 3 numbers. FIrst and last are strings", function() {
            assert.equal(task3("2", 3, "4"), 234);
        });  
        
        it("task3 3 numbers. All are strings", function() {
            assert.equal(task3("2", "3", "4"), 234);
        });  
    });
}
