function updateRate() {
    const rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

function compute() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const years = parseInt(document.getElementById("years").value);

    const interest = principal * years * rate / 100;
    const amount = principal + interest;
    const year = new Date().getFullYear() + years;

    const result = document.getElementById("result");

    if (principal <= 0 || isNaN(principal)) {
        alert("Enter a number greater than zero");
        document.getElementById("principal").focus();
        return;
    } else {
    result.innerHTML = `
        If you deposit <mark>${principal}</mark>, <br>
        at an interest rate of <mark>${rate}%</mark>. <br>
        You will receive <mark>${interest}</mark> as interest in the year <mark>${year}</mark>. <br><br>
        Totaling <mark>${amount}</mark>.
    `;}
}