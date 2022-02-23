// You should implement your task here.

module.exports = function towelSort(matrix) {

    let result;
    let mas1 = [];

    if (arguments.length === 0) {
        result = [];
    } else if (arguments.length > 0) {

        for (let i = 0; i < matrix.length; i++) {

            if (i % 2 === 0) {
                for (let x = 0; x < matrix[i].length; x++) {
                    mas1.push(matrix[i][x]);
                }
            } else {
                for (let n = matrix[i].length - 1; n >= 0; n--) {
                    mas1.push(matrix[i][n]);
                }
            }
        }
        result = mas1;
    }

    return result;
}