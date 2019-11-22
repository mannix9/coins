
var value = prompt("Please enter a value of your coin from 2 pounds and upwards? ")
value = value * 100
if(value % 2 == 0){
    alert(((value/2) + 1) + ((100/2) + 1) + ((50/2) +1) + ((20/2) + 1) + ((10/2) + 1) + 1)
}
else if(value % 2 != 0){
    alert((value+1/2) + (100+1/2) + (50+1/2) + (20+1/2) + (10+1/2) + 1)
}
