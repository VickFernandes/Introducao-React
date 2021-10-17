import './App.css';
//Para executar esta aplicação, altere a linha 4 do arquivo "index.js" para "App04.js"

var dias = parseInt(prompt("Digite a quantidade de dias:"));
var meses = parseInt(prompt("Digite a quantidade de meses:"));
var anos = parseInt(prompt("Digite a quantidade de anos:"));

function diastotal() {
    var diastotal = dias + (anos * 365) + (meses * 30);
    return (diastotal);
}

function App03() {
    return ( <
        div className = "App03" >
        <
        p > Sua idade em dias é de: { diastotal() } < /p> < /
        div >
    );

}

export default App03;