const number_of_boxes_in_row = 10;
const number_of_boxes_in_column = 10;

let box_width, box_height;

function setup() {
    createCanvas(600,600);
    box_height = height / number_of_boxes_in_column;
    box_width = width / number_of_boxes_in_row;
}
function draw() {
    for(let i = 0; i < number_of_boxes_in_row ; i++){
        const x = i * box_width;
        for(let j = 0; j < number_of_boxes_in_column; j++){
            const y = j * box_height;
            fill(30, 144, 255);
            rect(x, y, box_width, box_height);
        }
    }
    let r = random(0, 9);
}

/**
 * Create color fill according to position of box and
 * total number of boxes.
 * @param {Number} i position of box in row
 * @param {Number} y y-coordinate for box in column
 */

