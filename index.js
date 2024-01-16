var typed = new Typed(".text",{
    strings:["Frontend Developer","Youtuber","Web Developer","Graphis Designr"],
    typeSpeed:50,
    backSpeed:50,
    backDelay:500,
    loop:true
})
let number1 = document.getElementById("number1");
let counter1 = 0;
setInterval(() => {
    if(counter1 == '80'){
        clearInterval();
    }else{
        counter1 +=1;
        number1.innerHTML = counter1 + `%`
    }
},30)

let number2 = document.getElementById("number2");
let counter2 = 0;
setInterval(() => {
    if(counter2 == '60'){
        clearInterval();
    }else{
        counter2 +=1;
        number2.innerHTML = counter2 + `%`
    }
},40)
let number3 = document.getElementById("number3");
let counter3 = 0;
setInterval(() => {
    if(counter3 == '67'){
        clearInterval();
    }else{
        counter3 +=1;
        number3.innerHTML = counter3 + `%`
    }
},30)
let number4 = document.getElementById("number4");
let counter4 = 0;
setInterval(() => {
    if(counter4 == '55'){
        clearInterval();
    }else{
        counter4 +=1;
        number4.innerHTML = counter4 + `%`
    }
},30)