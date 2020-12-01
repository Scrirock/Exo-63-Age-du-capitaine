for (let i = 1; i<100; i++){
    document.getElementById("age").innerHTML += "Le capitaine a "+i+" ans";
    if (i <= 18){
        document.getElementById("age").innerHTML += ", le capitaine est jeune<br>";
    }
    else if (i <= 50){
        document.getElementById("age").innerHTML += ", le capitaine n'est pas très vieux<br>";
    }
    else {
        document.getElementById("age").innerHTML += ", le capitaine est vieux<br>";
    }
}

document.getElementById("age").innerHTML += "le capitaine est mort";