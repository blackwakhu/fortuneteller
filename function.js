let fortunes = ['you will get what you wanted', 'you will meet someone interesting', 'you will have a wonderful time', 'you will have a memorable day', 'be prepared for the successes of today'
                ,'you are going to meet an old buddy', 'your close relative is going to surprise you', 'you are going to win lotto', 'you are going to get a lot of money today', 'you are going to be appreciated at your work place',
                'you are going to do something phenomenon', 'try again', 'you future is bright','continue with the path to success'];
let btn = document.querySelector('#teller');
const colors = "";
let body  = document.querySelector("body")

function getfortune(){
    return fortunes[Math.floor(Math.random() * fortunes.length)];
}

function displayfortune(){
    let demo = getfortune();
    document.querySelector("p").innerHTML = demo;
}

btn.addEventListener("click", displayfortune);

function getrandomvalues(){
    return Math.floor(Math.random()*255);
}

setInterval(changeColor, 1500);

function changeColor(){
    r = getrandomvalues();
    g = getrandomvalues();
    b = getrandomvalues();

    let colorchanger = r+", "+g+", "+b;

    body.style.background = "rgb("+colorchanger+")";
}