import './App.css';
//Para executar esta aplicação, altere a linha 4 do arquivo "index.js" para "App06.js"

var salario = parseInt(prompt("Digite o salário mensal:"));
var reajuste = parseInt(prompt("Digite o percentual de reajuste:"));

function final() {
    var final = (salario * reajuste / 100) + salario;
    return (final);
}

function App06() {
    return ( <
        div className = "App06" >
        <
        p > O novo salário corresponde a: { final() } < /p>  < /
        div >
    );

}

export default App06;