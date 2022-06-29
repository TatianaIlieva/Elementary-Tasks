import task1 from './src/task1.js';
import task2 from './src/task2.js';
import task3 from './src/task3.js';

function hideChildren() {
    const container = document.querySelector('.container');
    for (let i = 0; i < container.children.length; i++) {
        container.children[i].style.display = "none";
    }
}

document.querySelector('#task1').addEventListener('click', event => {
    hideChildren();
    document.querySelector('#task1-container').style.display = "block";
})

document.querySelector('#task2').addEventListener('click', event => {
    hideChildren();
    document.querySelector('#task2-container').style.display = "block";
})

document.querySelector('#task3').addEventListener('click', event => {
    hideChildren();
    document.querySelector('#task3-container').style.display = "block";
})