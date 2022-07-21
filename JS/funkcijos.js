function fun1(insideH) {
    let task1 = document.getElementById("task1");
    task1.innerHTML = "<h1>" + insideH + "</h1>";
}

fun1("Čia yra h1!");

function fun2(h, num) {
    let task2 = document.getElementById("task2");
    task2.innerHTML += "<h" + num + ">" + h + "</h" + num + ">";
}

fun2("Čia kitoks h!", "4");
fun2("Čia kitoks h!", "3");
fun2("Čia kitoks h!", "2");
fun2("Čia kitoks h!", "5");
fun2("Čia kitoks h!", "6");


function rndStr(lengthOfString) {
    let result = '';
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charsLength = chars.length;
    for (let i = 0; i < lengthOfString; i++) {
        result += chars.charAt(Math.floor(Math.random() * charsLength));
    }
    return result;
}

function fun3() {
    let task3 = document.getElementById("task3")
    let str = rndStr(20);
    console.log(str);
    let tmp = "";
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            tmp += str[i];
        } 
        else {
            if (tmp != "") {
                console.log("[" + tmp + "]");
                task3.innerHTML += "<h1>" + "[" + tmp + "]" + "</h1>";
                tmp = "";
            }
            else {
                console.log(str[i]);
                task3.innerHTML += "<p>" + str[i] + "</p>";

            }
        }

    }
    return;
}
fun3()

function fun4(arg) {
    let task4 = document.getElementById("task4")
    count = 0
    for (let i = 2; i <= Math.floor(arg / 2); i++) {
        console.log("i" + i);
        if (arg % i == 0) {
            count++;
            task4.innerHTML = "<p>Ketvirtos užduoties atsakymas: " + count + "</p>";
        }
        
    }
    return count;
}

fun4(6)
console.log(fun4(6));

function fun5() {
    
}