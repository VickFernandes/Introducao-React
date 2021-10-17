import './App.css';
//Para executar esta aplicação, altere a linha 4 do arquivo "index.js" para "App08.js"

var salario = parseInt(prompt("Digite o salário fixo do funcionário:"));
var carrosv = parseInt(prompt("Digite o número de carros vendidos do funcionário:"));
var valorcv = parseInt(prompt("Digite o valor que ele recebe por carro vendido:"));
var valorv = parseInt(prompt("Digite o valor total das vendas:"));

function final() {
    var comicaoevenda = (valorv * 0.05) + (carrosv * valorcv)
    var final = salario + comicaoevenda
    return (final);
}

function App08() {
    return ( < div className = "App08" >
        <
        p > O salário final do funcionário é de: R$ { final() } < /p>    < /
        div >
    );
}

export default App08;