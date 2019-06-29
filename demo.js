document.getElementById('string').addEventListener("submit", function(e){
    e.preventDefault();
    var text = document.getElementById("field_str").value;
    document.getElementById("result").innerHTML = letterPy(text);
});

document.getElementById('date').addEventListener("submit", function(e){
    e.preventDefault();
    var text = document.getElementById("field_date").value;
    console.log(text);
    document.getElementById("result").innerHTML = birthday(text);
});