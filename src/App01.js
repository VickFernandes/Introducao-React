import './App.css';
//Para executar esta aplicação, altere a linha 4 do arquivo "index.js" para "App01.js"

var a = parseInt(prompt("Digite um valor"));
var b = parseInt(prompt("Digite um valor"));

function soma() {
    return (a + b);
}

function sub() {
    return (a - b);
}

function mult() {
    return (a * b);
}

function div() {
    return (a / b);
}

function App01() {
    return ( <
        div className = "App01" >
        <
        p > A soma dos dos valores é de: { soma() } < /p> <
        p > A subtração dos dos valores é de: { sub() } < /p> <
        p > A multiplicação dos dos valores é de: { mult() } < /p> <
        p > A divisão dos dos valores é de: { div() } < /p> < /
        div >
    );
}

export default App01;