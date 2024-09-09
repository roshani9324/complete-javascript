// const sayDate=function(str){
//     console.log(str,Date.now());
// }
// const intervalId=setInterval(sayDate,1000,"hi")

// clearInterval(intervalId)



//Project 
//generated a random color

const randomColor=function(){
    const hex="01123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
let IntervalID;
const startChangingColor=function(){
if(!IntervalID){
     IntervalID = setInterval(changeBgColor, 1000);
}

function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
}
};
const stopChangingColor = function () {
    clearInterval(IntervalID)
    IntervalID=null;
    

};

document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
