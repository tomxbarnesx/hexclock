let theClock = document.getElementById("the-clock");
let theBody = document.getElementById("the-body");

let startTheClock = () => {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
  
    h = (h < 10) ? "0" + String(h) : String(h);
    m = (m < 10) ? "0" + String(m) : String(m);
    s = (s < 10) ? "0" + String(s) : String(s);
    
    let time = "#" + h + m + s;
    theClock.innerText = time;
    theClock.textContent = time;
    
    let theHex = theClock.innerText;
    theBody.style.backgroundColor = theHex;

    setTimeout(startTheClock, 1000);

}

startTheClock();


// let changeTheColor = () => {
//     theBody.style.backgroundColor = theHex;
//     setTimeout(changeTheColor, 1000);
// }