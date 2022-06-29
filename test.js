import task1Test from '/src/task1.test.js';
import task2Test from '/src/task2.test.js';
import task3Test from '/src/task3.test.js';

mocha.setup('bdd'); 

task1Test();
task2Test();
task3Test();

mocha.run();