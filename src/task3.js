export default function task3(side1, side2, side3) {
    class triangle {
        constructor(vertices, side1, side2, side3, area) {
            this.vertices = vertices;
            this.side1 = side1;
            this.side2 = side2;
            this.side3 = side3;
            this.area = (side1 + side2 + side3) / 2;
        }
    }

    const triangleSet = [];

    document.querySelector("#submit3").addEventListener('click', event = (e) => {
        console.clear();
        e.preventDefault();
        let vertices = document.querySelector('#vertices').value.toLowerCase();
        side1 = document.querySelector('#side1').value;
        side2 = document.querySelector('#side2').value;
        side3 = document.querySelector('#side3').value;

        let triangles = new triangle(vertices, side1, side2, side3);

        triangleSet.push(triangles);

        function compare(a, b) {
            if (a.area < b.area) {
                return -1;
            }
            if (a.area > b.area) {
                return 1;
            }
            return 0;
        }

        triangleSet.sort(compare);

        console.log(triangleSet);
    })
    return side1 + side2 + side3;
}