const title = document.querySelector('#title'),
box1 = document.querySelector('#box1'),
box2 = document.querySelector('#box2'),
box3 = document.querySelector('#box3'),
box4 = document.querySelector('#box4'),
box5 = document.querySelector('#box5'),
box6 = document.querySelector('#box6'),
box7 = document.querySelector('#box7'),
box8 = document.querySelector('#box8'),
box9 = document.querySelector('#box9');

let mood = 'x';

function game(id) {
    let all = document.getElementById(id);

    if (mood === 'x' && all.innerHTML === '') {
        title.innerHTML = 'o';
        all.innerHTML = 'x';
        mood = 'o';
    } else if (mood === 'o' && all.innerHTML === '') {
        title.innerHTML = 'x';
        all.innerHTML = 'o';
        mood = 'x';
    };
    winnerData();
};

function winnerData() {
    if(box1.innerHTML == box2.innerHTML && box2.innerHTML == box3.innerHTML && box2.innerHTML != '') {
        title.innerHTML = `${box1.innerHTML} winer`;
        box1.style.background = '#56baed';
        box2.style.background = '#56baed';
        box3.style.background = '#56baed';

        box1.style.color = 'white';        
        box2.style.color = 'white';        
        box3.style.color = 'white';

        setInterval(function () {
            title.innerHTML += '.';
        }, 1000);
        
        setTimeout(function () {
            location.reload();
        }, 3000);
    } else if(box4.innerHTML == box5.innerHTML && box5.innerHTML == box6.innerHTML && box5.innerHTML != '') {
        title.innerHTML = `${box4.innerHTML} winer`;
        box4.style.background = '#56baed';
        box5.style.background = '#56baed';
        box6.style.background = '#56baed';

        box4.style.color = 'white';        
        box5.style.color = 'white';        
        box6.style.color = 'white';

        setInterval(function () {
            title.innerHTML += '.';
        }, 1000);
        
        setTimeout(function () {
            location.reload();
        }, 3000);
    } else if(box7.innerHTML == box8.innerHTML && box8.innerHTML == box9.innerHTML && box7.innerHTML != '') {
        title.innerHTML = `${box7.innerHTML} winer`;
        box7.style.background = '#56baed';
        box8.style.background = '#56baed';
        box9.style.background = '#56baed';

        box7.style.color = 'white';        
        box8.style.color = 'white';        
        box9.style.color = 'white';

        setInterval(function () {
            title.innerHTML += '.';
        }, 1000);
        
        setTimeout(function () {
            location.reload();
        }, 3000);
    } else if(box1.innerHTML == box4.innerHTML && box4.innerHTML == box7.innerHTML && box1.innerHTML != '') {
        title.innerHTML = `${box1.innerHTML} winer`;
        box1.style.background = '#56baed';
        box4.style.background = '#56baed';
        box7.style.background = '#56baed';

        box1.style.color = 'white';        
        box4.style.color = 'white';        
        box7.style.color = 'white';

        setInterval(function () {
            title.innerHTML += '.';
        }, 1000);
        
        setTimeout(function () {
            location.reload();
        }, 3000);
    } else if(box2.innerHTML == box5.innerHTML && box5.innerHTML == box8.innerHTML && box2.innerHTML != '') {
        title.innerHTML = `${box2.innerHTML} winer`;
        box2.style.background = '#56baed';
        box5.style.background = '#56baed';
        box8.style.background = '#56baed';

        box2.style.color = 'white';        
        box5.style.color = 'white';        
        box8.style.color = 'white';

        setInterval(function () {
            title.innerHTML += '.';
        }, 1000);
        
        setTimeout(function () {
            location.reload();
        }, 3000);
    } else if(box3.innerHTML == box6.innerHTML && box6.innerHTML == box9.innerHTML && box3.innerHTML != '') {
        title.innerHTML = `${box3.innerHTML} winer`;
        box3.style.background = '#56baed';
        box6.style.background = '#56baed';
        box9.style.background = '#56baed';

        box3.style.color = 'white';        
        box6.style.color = 'white';        
        box9.style.color = 'white';

        setInterval(function () {
            title.innerHTML += '.';
        }, 1000);
        
        setTimeout(function () {
            location.reload();
        }, 3000);
    } else if(box3.innerHTML == box5.innerHTML && box5.innerHTML == box7.innerHTML && box3.innerHTML != '') {
        title.innerHTML = `${box3.innerHTML} winer`;
        box3.style.background = '#56baed';
        box5.style.background = '#56baed';
        box7.style.background = '#56baed';

        box3.style.color = 'white';        
        box5.style.color = 'white';        
        box7.style.color = 'white';

        setInterval(function () {
            title.innerHTML += '.';
        }, 1000);
        
        setTimeout(function () {
            location.reload();
        }, 3000);
    } else if(box1.innerHTML == box5.innerHTML && box5.innerHTML == box9.innerHTML && box1.innerHTML != '') {
        title.innerHTML = `${box1.innerHTML} winer`;
        box1.style.background = '#56baed';
        box5.style.background = '#56baed';
        box9.style.background = '#56baed';

        box1.style.color = 'white';        
        box5.style.color = 'white';        
        box9.style.color = 'white';

        setInterval(function () {
            title.innerHTML += '.';
        }, 1000);
        
        setTimeout(function () {
            location.reload();
        }, 3000);
    };
};