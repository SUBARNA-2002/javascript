//var
/*
used in older js versions
function scoped
can be re-declared
can be re-assigned

*/
var a =10;
var a =20;
a=30
console.log("a=>",a);

//let
/*
used in modern js versions
block scoped
can be re-assigned
cannot be re-declared
*/
let b=10;
b=20;
console.log("b=>",b);

//const
/*
used in modern js versions
block scoped
cannot be re-assigned
cannot be re-declared
*/
const c=10;
//c=20; //error
console.log("c=>",c);
