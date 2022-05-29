function printVolume(a, b){
    var totalVolume = sumVolume(a, b);
    
    function sumVolume(number1, number2) {
        var volume = volumeOf(number1) + volumeOf(number2);
        return volume;
    }
    
    function volumeOf(number1) {
        var volume = Math.pow(number1, 3);
        return volume;
    }
    
    console.log(totalVolume);
}

function sum(){
    var total = 0;
    for(var i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    
    
    console.log(total);
}

printVolume(8, 3);
sum(1, 2, 3, 4, 5);