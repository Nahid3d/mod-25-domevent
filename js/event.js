console.log('this is a js ');

// opotion 2
function makePurple(){
    document.body.style.backgroundColor= 'purple';
}

// opation 3
const makeBuleButto =document.getElementById('make-blue');
makeBuleButto.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor= 'blue';
}
const makeRed = document.getElementById('make-red');
makeRed.onclick = function makeRed(){
    document.body.style.backgroundColor= 'red';
}

// filnal option 

document.getElementById('makePink').addEventListener('click', function(){
    document.body.style.backgroundColor= 'pink';
})