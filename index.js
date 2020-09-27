function calculation(){
let bill = document.getElementById("bill").value;
let service = document.getElementById("service").value;
let people = document.getElementById("people").value;

//calculate the tip and round decimals using toFixed
let total = (bill * service) / people;
total = total.toFixed(2);
total = Math.round(total * 100) / 100;

//display the total tip
document.getElementById("totalTip").innerHTML = total;

if(total <= 1){
    document.getElementById("totalTip").style.color = "red";
} else {
    document.getElementById("totalTip").style.color = "blue";
}
}

document.getElementById("calculate").onclick = function() {
    calculation();
}