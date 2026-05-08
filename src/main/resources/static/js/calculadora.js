function suma()
{
    let n1=document.getElementById("n1").value;
    let n2=document.getElementById("n2").value;
    let resultado=n1+n2;
    // acceder al parragfin
    document.getElementById("resultado").innerHTML="Resultado = " + resultado;

}

function resta()
{
    let n1=document.getElementById("n1").value;
    let n2=document.getElementById("n2").value;
    let resultado=n1-n2;
    // acceder al parragfin
    document.getElementById("resultado").innerHTML="Resultado = " + resultado;
}

function multiplicacion()
{
    let n1=document.getElementById("n1").value;
    let n2=document.getElementById("n2").value;
    let resultado=n1*n2;
    // acceder al parragfin
    document.getElementById("resultado").innerHTML="Resultado = " + resultado;
}

function division()
{
    let n1=document.getElementById("n1").value;
    let n2=document.getElementById("n2").value;

    if(n2=!0)
    {
        let resultado=n1/n2;
        // acceder al parragfin
        document.getElementById("resultado").innerHTML="Resultado = " + resultado;
    }

    document.getElementById("resultado").innerHTML="Resultado invalido, no puedes dividir entre 0";


}