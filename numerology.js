//reduce number to single digit, unless result is master number(11,22,33)
function reduceNumber(number){
    if (number==11 || number==22 || number==33 || number == 44){
        return number;
    }
    var reduced = Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
    //Recur if there are multiple digits
    if (reduced > 9){
        return reduceNumber(reduced);
    }
    return reduced;
}

//Basic letter cypher converts a=1 b=2... z=26.
function letterCypher(letter){  
    //Unicode lowercase Latin from 97-122 a=1, b=2, etc
    var numerical = letter.toLowerCase().charCodeAt(0) - 96;
    if (numerical < 1 || numerical > 26){
        console.log("'" + letter + "' is not a latin character and will be skipped");
        return 0;
    }
    return numerical;
}

//Assumes date format YYYY-MM-DD, but will function as expected with DD-MM-YYYY or MM-DD-YYYY
function birthday(date){
    var parsedDate = date.split("-");
    return reduceNumber(
        reduceNumber(parsedDate[0]) +
        reduceNumber(parsedDate[1]) +
        reduceNumber(parsedDate[2])
    );
}


//Converts letters in string to number using Pythagorean rules
function letterPy(string){
    var array = [];
    for (var i = 0; i < string.length; i++) {
        array.push(letterCypher(string.charAt(i))%9);
    }
    return reduceNumber(array.reduce(function(a,b){return +a + +b}, 0));
}
