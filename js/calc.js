    function clr() {
        document.getElementById('output').value = "";
    }

    function display(val) {
        document.getElementById('output').value += val;
    }

    function solve() {
        var x = document.getElementById("output").value;
        var y = eval(x);
        document.getElementById("output").value = y;
    }