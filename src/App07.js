import './App.css';
//Para executar esta aplicação, altere a linha 4 do arquivo "index.js" para "App07.js"

var custof = parseInt(prompt("Digite o valor do custo de fábrica do carro:"));

function final() {
    var final = (custof * 0.28) + (custof * 0.45) + custof;
    return (final);
}

function App07() {
    return ( <
        div className = "App07" >
        <
        p > O valor do carro para o consumidor será de: R$ { final() } < /p> < /
        div >
    );

}

export default App07;