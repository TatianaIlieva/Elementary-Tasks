export default function task2(a,b,c,d) {
    document.querySelector("#submit2").addEventListener('click', event = (e) => {
        e.preventDefault();
        console.clear();
        let a = document.querySelector('#a').value;
        let b = document.querySelector('#b').value;
        let c = document.querySelector('#c').value;
        let d = document.querySelector('#d').value;

        if (a == "" || b == "" || c == "" || d == "") {
            let empty = document.createElement("p");
            empty.className = "empty";
            empty.innerHTML = "Please enter all values";
            document.querySelector("#task2-container").appendChild(empty);
        }
        else {
            let check = document.querySelector(".empty")
            if (check) {
                check.style.display = "none";
            }

            const env1 = { width: a, height: b };
            const env2 = { width: c, height: d };

            let env1S = env1.width * env1.height;
            let env2S = env2.width * env2.height;

            if (env1S > env2S) {
                if (env1.width > env2.width && env1.height > env2.height) {
                    console.log("The first envelope is bigger and it will enclose the second envelope");
                    return 1;
                }
                else {
                    console.log("The first envelope is bigger but it will not enclose the second envelope");
                    return 0;
                }
            }
            else {
                if (env1S < env2S) {
                    if (env1.width < env2.width && env1.height < env2.height) {
                        console.log("The second envelope is bigger and it will enclose the first envelope");
                        return 1;
                    }
                    else {
                        console.log("The second envelope is bigger but it will not enclose the first envelope");
                        return 0;
                    }
                }
                else {
                    if (env1S == env2S) {
                        if (env1.width == env2.width && env1.height == env2.height) {
                            console.log("The two envelopes are equal");
                            return 0;
                        }
                        else {
                            console.log("The two envelopes have equal space but no one can enclose the other");
                            return 0;
                        }
                    }
                }
            }
        }
    })
    return a*b + c*d;
}