let x = 5;

let obj1 = {
    name: 'Mohamed',
    age: 23
}

let objClone = { ...obj1 }



function callByValue(x)
{
    x++
    console.log(`X in function `, x);
}

function callByRef(obj)
{
    return obj.name = "Ali";
}

callByValue(x)
callByRef(obj1)



console.log(`X : ${x}`);
console.log(`Object : `, obj1);
console.log(`Object : `, objClone);