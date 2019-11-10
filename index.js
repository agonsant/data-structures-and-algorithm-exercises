console.log('######## PALINDROME ##########');
const palindrome = require('./src/palindrome');

console.log(palindrome('A mamá Roma le aviva el amor a papá y a papá Roma le aviva el amor a mamá'));
console.log(palindrome('La ruta nos aportó otro paso natural'));
console.log(palindrome('¡Ojo! corre poco pero cojo'));

console.log('######## BALANCED ##########');
const balanced = require('./src/balanced-expression');

console.log(balanced('({[]})()'));
console.log(balanced('Téngase en cuenta (obviamente) que puede haber otros símbolos.'));
console.log(balanced('({)}'));

console.log('######## DECODE ##########');
const decode = require('./src/message-decode');

console.log(decode('BnodJo s, dBneam'));
console.log(decode('aueoi'));
console.log(decode('E. .n.ualn cnhuag aMda  rle'));
console.log(decode('Aauirnedleiua nBo'));


