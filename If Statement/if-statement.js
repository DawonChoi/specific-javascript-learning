// ## determine something is eatable ##

// -------------------------------------------------------------------------------------------------------------------
// case 1 : use an includes method of array

// if statement 
let something = 'chicken'

if(something == 'pizza' 
|| something == 'cheese' 
|| something == 'chicken'
|| something == 'kimchi'
|| something == 'galbi'
|| something == 'hamburger'
|| something == 'ramen'
|| something == 'susi'
|| something == 'sandwich'
|| something == 'cookie'){
    console.log('something is eatable!');
}

// well-use if statement
const eatable = ['pizza', 'cheese', 'chicken', 'kimchi', 'galbi', 'hamburger', 'ramen', 'susi', 'sandwich', 'cookie']
let something_well = 'chicken'

if(eatable.includes(something_well)) console.log('something_well is eatable!');

// -------------------------------------------------------------------------------------------------------------------
// case 2 : avoid reiteration of if statement and return asap

// reiteration if statement
function check(something) {
    const eatable = ['pizza', 'cheese', 'chicken', 'kimchi', 'galbi', 'hamburger', 'ramen', 'susi', 'sandwich', 'cookie']

    if(something) {
        if(eatable.includes(something)){
            console.log('something is eatable!');
            if(something == 'chicken'){
                console.log('something is chicken!');
            }
        }
    } else {
        throw new Error('nothing!');
    }
}

// well-use if statement
function check_well(something) {
    const eatable = ['pizza', 'cheese', 'chicken', 'kimchi', 'galbi', 'hamburger', 'ramen', 'susi', 'sandwich', 'cookie']
    if(!something) throw new Error('nothing!');
    if(!eatable.includes(something)) return;

    console.log('something is eatable!');
    if(something == 'chicken') console.log('something is chicken!');
}
