var x = 100;
var y = 100;
var s = 100;
var o = 25;

function setup() {
    createCanvas(900, 600);
    ellipseMode(CENTER);
    rectMode(CENTER);

}

function draw() {
    //background
    background(200);


    //seasons
    if (mouseIsPressed) {
        //Summer scene
        background("gold");
        noStroke();

        //sun
        fill("yellow");
        ellipse(x, y, s);

        //ground
        fill("green");
        rect(width / 2, height, width, height / 2)

        //trees
        fill("brown");
        rect(x + o, y + o * 15, width / o, height / 5);
        rect(x + o * 8, y + o * 15, width / o, height / 5);
        rect(x + o * 16, y + o * 15, width / o, height / 5);
        rect(x + o * 24, y + o * 15, width / o, height / 5);

        fill("lightgreen")
        ellipse(x + o, y + o * 9, s * 2);
        ellipse(x + o * 8, y + o * 9, s * 2);
        ellipse(x + o * 16, y + o * 9, s * 2);
        ellipse(x + o * 24, y + o * 9, s * 2);

    } else if (key == 'A') {
        //winter scene
        background('mediumblue');
        fill('white');
        ellipse(x + o, y + o, s + o);

        //snow
        ellipse(x * 2, y * 7, s * 5);
        ellipse(x * 6, y * 7, s * 5);

        //trees
        fill("brown");
        rect(x + o, y + o * 15, width / o, height / 5);
        rect(x + o * 8, y + o * 15, width / o, height / 5);
        fill("green");
        triangle(x - o * 3, y + o * 13, x + o * 4, y + o * 3, x + o * 6, y + o * 13);
        triangle(x + o * 5, y + o * 13, x + o * 9, y + o * 3, x + o * 11, y + o * 13);

    } else if (key == 'B') {
        //autumn scene
        background("purple");
        noStroke();

        //sun
        fill("lightblue");
        ellipse(x, y, s);

        //ground
        fill("darkgreen");
        rect(width / 2, height, width, height / 2);

        //trees
        fill("brown");
        rect(x + o, y + o * 15, width / o, height / 5);
        rect(x + o * 8, y + o * 15, width / o, height / 5);
        rect(x + o * 16, y + o * 15, width / o, height / 5);
        rect(x + o * 24, y + o * 15, width / o, height / 5);

        fill("green");
        ellipse(x + o, y + o * 9, s * 2);
        fill("red");
        ellipse(x + o * 8, y + o * 9, s * 2);
        fill("orange");
        ellipse(x + o * 16, y + o * 9, s * 2);
        fill("gold");
        ellipse(x + o * 24, y + o * 9, s * 2);
    }
}
