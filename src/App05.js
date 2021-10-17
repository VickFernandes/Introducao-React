import './App.css';
//Para executar esta aplicação, altere a linha 4 do arquivo "index.js" para "App05.js"

var votost = parseInt(prompt("Digite a quantidade de votos total:"));
var votosb = parseInt(prompt("Digite a quantidade de votos brancos:"));
var votosn = parseInt(prompt("Digite a quantidade de votos nulos:"));
var votosv = parseInt(prompt("Digite a quantidade de votos válidos:"));

function pvotosb() {
    var pvotosb = (votosb * 100) / votost;
    return (pvotosb);
}

function pvotosn() {
    var pvotosn = (votosn * 100) / votost;
    return (pvotosn);
}

function pvotosv() {
    var pvotosv = (votosv * 100) / votost;
    return (pvotosv);
}

function App05() {
    return ( <
        div className = "App05" >
        <
        p > A porcentagem de votos brancos corresponde a: { pvotosb() } % < /p>   <
        p > A porcentagem de votos nulos corresponde a: { pvotosn() } % < /p>   <
        p > A porcentagem de votos válidos corresponde a: { pvotosv() } % < /p>   <
        /div>
    );
}

export default App05;