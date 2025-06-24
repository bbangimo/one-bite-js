// mission1

let animal = 'tiger';

switch (animal) {
    case 'dog':
        console.log('강아지');
        break;

    case 'tiger':
        console.log('호랑이');
        break;

    case 'cat':
        console.log('고양이');
        break;

    case 'lion':
        console.log('사자');
        break;

    default:
        console.log('다른 동물');
        break;
}

// mission2
let answer = '';

function connectStrings(str1, str2) {
    if (str1 === undefined) {
        str1 = 'hello';
    }
    if (str2 === undefined) {
        str2 = 'javascript';
    }
    answer = str1 + ' ' + str2;
}

connectStrings();

console.log(answer);