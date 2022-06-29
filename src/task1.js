export default function task1(widthValue, heightValue, charValue) {
    document.querySelector("#submit1").addEventListener('click', event = (e) => {
        e.preventDefault();
        console.clear();
        widthValue = document.querySelector('#width').value;
        heightValue = document.querySelector('#height').value;
        charValue = document.querySelector('#char').value;

        if (isNaN(widthValue) || isNaN(heightValue) || widthValue == "") {
            if (isNaN(widthValue) || widthValue == "") {
                let widthErr = document.querySelector(".width-error");
                widthErr.style.display = "block"
            }
            if (isNaN(heightValue) || heightValue) {
                let widthErr = document.querySelector(".height-error");
                widthErr.style.display = "block"
            }
        }
        else {
            for (let j = 0; j < heightValue; j++) {
                let str = "";
                for (let i = 0; i < widthValue; i++) {
                    if (!(i % 2 == 0) && !(j % 2 == 0)) {
                        str += charValue;
                    }
                    else {
                        if (i % 2 == 0 && j % 2 == 0) {
                            str += charValue;
                        }
                        else {
                            str += " ";
                        }
                    }
                }
                console.log(str);
            }
        }
    });
}