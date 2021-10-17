import './App.css';
//Para executar esta aplicação, altere a linha 4 do arquivo "index.js" para "App03.js"

var altura = parseInt(prompt("Digite a altura:"));
var base = parseInt(prompt("Digite a base:"));

function area() {
    var area = base * altura;
    return (area);
}

function App03() {
    return ( <
        div className = "App03" >
        <
        p > A área deste retângulo é de: { area() }
        cm < /p> 

        <
        /div>
    );

}

export default App03;