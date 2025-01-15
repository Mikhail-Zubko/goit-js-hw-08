import Player from '@vimeo/player';

const player = new Player('handstick', {
    id: 19231868,
    width: 640
});

player.on('play', function() {
    console.log('played the video!');
});

const value = 100


function add(a, b) {
    return a + b
}

function sum(a, b) {
    return a * b + value
}


export {add, sum}
