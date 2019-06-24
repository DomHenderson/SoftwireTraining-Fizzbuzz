// for ( let i = 1; i <= 100; ++i ) {
//     if ( i % 3 ) { //if not divisible by 3
//         if ( i % 5 ) { //and not divisible by 5
//             console.log(i);
//         } else { //divisible by 5 (and not 3)
//             console.log('Buzz');
//         }
//     } else { //divisible by 3
//         if ( i % 5 ) { //not divisible by 5
//             console.log('Fizz');
//         } else { // divisible by both
//             console.log('FizzBuzz');
//         }
//     }
// }


const readline = require ('readline-sync');

console.log('Enter the limit');
var max = readline.prompt('Enter the limit');

function checkRule ( num ) {
    console.log(`Activate rule for ${num}?`);
    let response = readline.prompt().toLowerCase();
    while ( response != '' && response != 'y' && response != 'n' && response != 'yes' && response !='no' ) {
        console.log(`${response} is not a valid response`);
        console.log(`Activate rule for ${num}? (y/n)`);
        let response = readline.prompt().toLowerCase();
    }
    return (response == '' || response == 'y' || response == 'yes' );
}

var rules = {3:false,5:false,7:false,11:false,13:false,17:false};

for ( num in rules ) {
    rules[num] = checkRule(num);
}

for ( let i = 1; i <= max; ++i ) {
    let s = [];
    //Add fizz
    if ( rules[3] && !(i%3) ) {
        s[0] = 'Fizz';
    }

    //Add buzz
    if ( rules[5] && !(i%5) ) {
        s[s.length] = 'Buzz';
    }

    //Add bang
    if ( rules[7] && !(i%7) ) {
        s[s.length] = 'Bang';
    }

    //Add bong
    if ( rules[11] && !(i % 11) ) {
        s = ['Bong'];
    }

    //Insert fezz before the first item starting with b
    if ( rules[13] && !(i%13) ) {
        for ( let j = 0; j < s.length; ++j ) {
            if ( s[j].charAt(0) == 'B' ) {
                //Shift existing items along to make room for fezz
                for ( let k = s.length; k > j; --k ) {
                    s[k] = s[k-1];
                }

                s[j] = 'Fezz';
                break;
            }
        }
    }

    //Reverse the order of the items
    if ( rules[17] && !(i%17) ) {
        s = s.reverse();
    }

    if ( s.length == 0 ) {
        console.log(i)
    } else {
        console.log(s.join(''));
    }
}