'number' + 3 + 3 //number33 - Конкатенація

null + 3 //3 - 0 + 3

5 && "qwerty" //qwerty - true|текст

+ '40' + +'2' + "hillel"; //42hillel - додавання|конкатенація

'10' - 5 === 6; //false - 5!=6

true + false //1 - 1+0

'4px' - 3 //Nan - не можливо

'4' - 3 //1 - 4-3

'6' + 3 ** 0; //1 - 9^0

12 / '6' //2 - 12:6

'10' + (5 === 6); //10false - string+string(false)

null == '' //false - null!=0

3 ** (9 / 3); //27 -3^3

!!'false' == !!'true' //true - true==true

0 || '0' && 1 //1 - true(вивід останнє значення - 1)

(+null == false) < 1; //false - true!<1

false && true || true // true  - false||true

false && (false || true); //false - false&&true

(+null == false) < 1 ** 5; //false - true!<1^5