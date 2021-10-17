import './App.css';
//Para executar esta aplicação, altere a linha 4 do arquivo "index.js" para "App10.js"

var n1 = parseInt(prompt("Digite a primeira nota do Aluno:"));
var n2 = parseInt(prompt("Digite a segunda nota do Aluno:"));
var n3 = parseInt(prompt("Digite a terceira nota do Aluno:"));

function M() {
    var M = (n1 * 2 + n2 * 3 + n3 * 5) / 10
    return (M);
}

function App09() {
    return ( < div className = "App09" >
        <
        p > A média final poderada do Aluno é de: { M() } < /p>    < /
        div >
    );
}

export default App09;