document.getElementById("percentage-1-calculate").addEventListener("click",
    ()=>
    {
        let x=+document.getElementById("percentage-1-x").value
        let y=+document.getElementById("percentage-1-y").value
        let result=x/100*y
        document.getElementById("percentage-1-result-x").innerHTML=x
        document.getElementById("percentage-1-result-y").innerHTML=y
        document.getElementById("percentage-1-result-output").innerHTML=result
        document.getElementById("percentage-1-result").removeAttribute("hidden")
    })


document.getElementById("percentage-2-calculate").addEventListener("click",
    ()=>
    {
        let x=+document.getElementById("percentage-2-x").value
        let y=+document.getElementById("percentage-2-y").value
        let result=x/y*100
        document.getElementById("percentage-2-result-x").innerHTML=x
        document.getElementById("percentage-2-result-y").innerHTML=y
        document.getElementById("percentage-2-result-ouput").innerHTML=result
        document.getElementById("percentage-2-result").removeAttribute("hidden")
    })


document.getElementById("percentage-3-calculate").addEventListener("click",
    ()=>
    {
        let x=+document.getElementById("percentage-3-x").value
        let y=+document.getElementById("percentage-3-y").value
        let result=(y-x)/x*100
        document.getElementById("percentage-3-result-x").innerHTML=x
        document.getElementById("percentage-3-result-y").innerHTML=y
        document.getElementById("percentage-3-result-ouput").innerHTML=result
        document.getElementById("percentage-3-result").removeAttribute("hidden")
    })

document.getElementById("percentage-1-reset").addEventListener("click", () => {
    document.getElementById("percentage-calculator-1").reset();
    document.getElementById("percentage-1-result").setAttribute("hidden", "true");
});

document.getElementById("percentage-2-reset").addEventListener("click", () => {
document.getElementById("percentage-calculator-2").reset();
document.getElementById("percentage-2-result").setAttribute("hidden", "true");
});
document.getElementById("percentage-3-reset").addEventListener("click", () => {
    document.getElementById("percentage-calculator-3").reset();
    document.getElementById("percentage-3-result").setAttribute("hidden", "true");
});
