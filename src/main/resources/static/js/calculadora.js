function suma()
{
    let n1=parseFloat(document.getElementById("n1").value);
    let n2=parseFloat(document.getElementById("n2").value);
    let resultado=n1+n2;
    // acceder al parragfin
    document.getElementById("resultado").innerHTML="Resultado = " + resultado;

}

function resta()
{
    let n1=parseFloat(document.getElementById("n1").value);
    let n2=parseFloat(document.getElementById("n2").value);
    let resultado=n1-n2;
    // acceder al parragfin
    document.getElementById("resultado").innerHTML="Resultado = " + resultado;
}

function multiplicacion()
{
    let n1=parseFloat(document.getElementById("n1").value);
    let n2=parseFloat(document.getElementById("n2").value);
    let resultado=n1*n2;
    // acceder al parragfin
    document.getElementById("resultado").innerHTML="Resultado = " + resultado;
}

function division()
{
    let n1=parseFloat(document.getElementById("n1").value);
    let n2=parseFloat(document.getElementById("n2").value);

    if(n2 !== 0)
    {
        let resultado=n1/n2;
        // acceder al parragfin
        document.getElementById("resultado").innerHTML="Resultado = " + resultado;
    }
    else{
        document.getElementById("resultado").innerHTML="Resultado invalido, no puedes dividir entre 0";
    }


}