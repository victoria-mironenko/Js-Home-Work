let a = '#';
while (a.length < 8) {
    console.log(a);
    a = a + '#';
}


let pattern1 = '#' + ' ';
let pattern2 = ' ' + '#';

while (pattern1.length < 20) {
    pattern1 = pattern1 + '#' + ' ';
}
while (pattern2.length < 20) {
    pattern2 = pattern2 + ' ' + '#';
}
function typeChessBoard() {
    console.log(pattern1);
    console.log(pattern2);
}

typeChessBoard();
typeChessBoard();
typeChessBoard();



let yourNumber;
do {
    yourNumber = prompt('Введите число больше 100');
} while (yourNumber <= 100 && yourNumber !== null);