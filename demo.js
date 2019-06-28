document.getElementById('form').addEventListener("submit", function(e){
    e.preventDefault();
    var text = document.getElementById("field").value;
    document.getElementById("result").innerHTML = letterPy(text);
});