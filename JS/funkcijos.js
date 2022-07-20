function fun1(insideH) {
    let task1 = document.getElementById("task1");
task1.innerHTML = "<h1>" + insideH + "</h1>";
}

fun1("Čia yra h1!");

function fun2(h,num) {
    let task2 = document.getElementById("task2");
    task2.innerHTML += "<h" + num + ">" + h + "</h" + num + ">";
}

fun2("Čia kitoks h!","4")
fun2("Čia kitoks h!","3")
fun2("Čia kitoks h!","2")
fun2("Čia kitoks h!","5")
fun2("Čia kitoks h!","6")


let rnd = Math.random().toString(16).substring(2, 20);
console.log(rnd);
function fun3(numb) {
    for (let i = 0; i < rnd.length; i++) {
        let task3 = rnd[i];
        // console.log(task3);
        if (isNaN(rnd)) {
            console.log(rnd);
        }
    }
}
// console.log(isNaN("7"));
// console.log(isNaN("e7"));
fun3(rnd);