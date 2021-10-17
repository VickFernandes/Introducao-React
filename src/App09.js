import './App.css';
//Para executar esta aplicação, altere a linha 4 do arquivo "index.js" para "App09.js"

var F = parseFloat(prompt("Digite a temperatura em Graus Fahrenheit:"));

function C() {
    var C = (F - 32) / 9 * 5
    return (C);
}

function App09() {
    return ( < div className = "App09" >
        <
        p > A tempratura em Graus Celsius é de: { C() }° < /p>    < /
        div >
    );
}

export default App09;