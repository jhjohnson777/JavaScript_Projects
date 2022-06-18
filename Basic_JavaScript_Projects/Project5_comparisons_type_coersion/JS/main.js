document.write(typeof "velo"); //displays string

document.write("20" + 60); //displays 2060 instead of 80

function isnot() {
    document.getElementById("nota").innerHTML = 0/0; //NaN
}

document.write(isNaN(007)) //false because it is a number

document.write(isNaN("hello")) //true because its not a number

function infiniti() {
    document.getElementById("inf").innerHTML = 4E310;
}

function negInfiniti() {
    document.getElementById("neginf").innerHTML = -4E310;
}

document.write(63 < 12);

console.log(3 + 3);

document.write(23 == 23);

X = 20
Y = 10 + 10
document.write(X === Y);

A = 10
B = "eleven"
document.write(A === B);

C = 10
D = "ten"
document.write(C === D);

E = 10
F = 12
document.write(E === F);

document.write(5 > 2 && 3 < 6);

document.write(5 > 2 && 6 < 3);

document.write(5 < 10 || 6 < 3);

document.write(10 < 5 || 6 < 3);

function not_Function() {
    document.getElementById("not").innerHTML = !(50 > 10);
}

function notnot_Function() {
    document.getElementById("notnot").innerHTML = !(50 < 10); //double neg becomes true
}
