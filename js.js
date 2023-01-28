function inserir(num){
    const numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function limpar(){
    document.getElementById('resultado').innerHTML = '';
}

function back(){
    const resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length - 1);
}

function igualdade(){
    const resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = eval(resultado);
}

