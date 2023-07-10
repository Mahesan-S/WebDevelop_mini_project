const gameboard = document.querySelector('#gameboard')
let context = gameboard.getContext('2d');
let scoreval = document.querySelector('.scoreval')

// -----------------------------------board width and height
const WIDTH = gameboard.width;
const HEIGHT = gameboard.height;

// ------------------------------------box function
let score = 0;
let active = true;
let gamestart = false;
let time_speed = 1000;

let UNIT = 25;

let box = [
    { x: 0, y: 0 }
];

let xvel = 0;
let yvel = 25;
// ---------------------------------paddle 

let paddle = [
    { x: UNIT * 3 + WIDTH / 2, y: HEIGHT - 25 },
    { x: UNIT * 2 + WIDTH / 2, y: HEIGHT - 25 },
    { x: UNIT + WIDTH / 2, y: HEIGHT - 25 },
    { x: +WIDTH / 2, y: HEIGHT - 25 },
];

let paddle_xvel = 25
let paddle_yvel = 0


// -----------------game start
startgame();
window.addEventListener('keydown', presskey)

function startgame() {
    context.fillStyle = '#212121';
    // start,stop,width,height
    context.fillRect(0, 0, WIDTH, HEIGHT);

    // ------------------------------BOX FUNCTION
    create_multi_direct_box()
    displaybox();
    // -----------------------------PADDLE FUNCTION
    createpaddle();
    // ---------------------------NEW PAGE FUNCTION
    // nexttick();

}

function clean() {
    context.fillStyle = '#212121';
    // start,stop,width,height
    context.fillRect(0, 0, WIDTH, HEIGHT);
}
// ---------------------------------------------------------
function create_multi_direct_box() {
    box[0].x = Math.floor(Math.random() * WIDTH / UNIT) * UNIT
}

function displaybox() {
    context.fillStyle = 'red';
    context.fillRect(box[0].x, box[0].y, UNIT, UNIT)
    context.strokeRect(box[0].x, 0, UNIT, UNIT);
}

function movebox() {
    let down = {
        x: box[0].x + xvel,
        y: box[0].y + yvel
    }
    box.unshift(down)
    if (paddle[0].y == box[0].y && paddle[0].x == box[0].x) {
        box[0].y = 0;
        create_multi_direct_box();
        score += 1;
        scoreval.textContent = score;
    }
    if (paddle[1].y == box[0].y && paddle[1].x == box[0].x) {
        box[0].y = 0;
        create_multi_direct_box();
        score += 1;
        scoreval.textContent = score;
    }
    if (paddle[2].y == box[0].y && paddle[2].x == box[0].x) {
        box[0].y = 0;
        create_multi_direct_box();
        score += 1;
        scoreval.textContent = score;
    }
    if (paddle[3].y == box[0].y && paddle[3].x == box[0].x) {
        box[0].y = 0;
        create_multi_direct_box();
        score += 1;
        scoreval.textContent = score;
    }

    // box.pop()
    // let down = {x:box[0].x+xvel, y:box[0].y+yvel} box.shift(down) box.pop()
}
// -------------------------------------------------------------

// --------------------------------------paddle function
function createpaddle() {
    paddle.forEach((padddpart) => {
        context.fillStyle = 'green'
        context.fillRect(padddpart.x, padddpart.y, UNIT, UNIT)
        context.strokeRect(padddpart.x, padddpart.y, UNIT, UNIT)
    })
}


function movepaddle() {
    let head = {
        x: paddle[0].x + paddle_xvel,
        y: paddle[0].y + paddle_yvel
    }
    paddle.unshift(head);
    paddle.pop();
}

// function movepaddle_left() { let head = {  x: paddle[0].x - paddle_xvel,  y: paddle[0].y + paddle_yvel  }  paddle.unshift(head);   paddle.pop();}

function presskey(event) {
    let LEFT = 37;
    let RIGTH = 39;
    let UP = 38;
    let DOWN = 40;

    if (!gamestart) {
        gamestart = true;
        nexttick();
    }

    switch (true) {
        case (event.keyCode == RIGTH):
            if (paddle[0].x < WIDTH) {
                paddle_xvel = UNIT;
                movepaddle();
                break;
                // console.log('right clicked')
            }
        case (event.keyCode == LEFT):
            if (paddle[0].x > 0) {
                paddle_xvel = -UNIT;
                movepaddle();
                // console.log('left clicked')
                break;
            }
    }
}

// -----------------------------time cntrl
function nexttick() {
    if (active) {
        setTimeout(() => {
            // ----------------------screen clean function
            clean();
            // -----------------------box function
            movebox();
            displaybox();
            // ---------------------paddle functio
            createpaddle();
            gameover()
            // -----------score update
            increase_time();
            // ---------------------call back function
            nexttick();
        }, time_speed)
    }
    else {
        clean();
        context.font = "bold 50px monospace";
        context.fillStyle = "white";
        context.textAlign = "center";
        context.fillText("game over :( ", WIDTH / 2, HEIGHT / 2);
    }
}


// ------------------------game over function
function gameover() {
    if (box[0].y > HEIGHT) {
        active = false;
    }
}

function increase_time() {
    if (score == 5) {
        time_speed = 900
    }
    if (score == 10) {
        time_speed = 800
    }
    if (score == 20) {
        time_speed = 600
    }
    if (score == 30) {
        time_speed = 300
    }
    if (score == 45) {
        time_speed = 200
    }
    if (score == 50) {
        time_speed = 100
    }
}