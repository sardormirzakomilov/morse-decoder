
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
    let decoded_text = "";

    for (let i = 0; i < expr.length; i += 10) {
        let raw_char = expr.slice(i, i + 10);

        if (raw_char === "**********") {
            decoded_text += " ";
            continue;
        }

        let morse_encoded_char = "";

        for (let j = 0; j < raw_char.length; j += 2) {
            let substr = raw_char.slice(j, j + 2);

            if (substr != "00") {
                morse_encoded_char += substr === "10" ? "." : "-";
            }
        }

        decoded_text += MORSE_TABLE[morse_encoded_char];
    }

    return decoded_text;
}

module.exports = {
    decode
}