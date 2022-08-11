const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str = '';
    let arr = [];
    while (expr.length >= 10) {
        str = expr.slice(0, 10);
        expr = expr.slice(10);
        arr.push(str);
    }
    arr = arr.map(item => item.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-'));
    return arr.map(item => {
        if (item === '**********') {
            return ' ';
        } else {
        return MORSE_TABLE[item];
        }
    }).join('');
}

module.exports = {
    decode
}