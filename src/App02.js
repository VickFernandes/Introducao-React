import './App.css';
//Para executar esta aplicação, altere a linha 4 do arquivo "index.js" para "App02.js"

var valor = parseInt(prompt("Digite um numero:"));

function ant() {
    var antecessor = valor - 1;
    return (antecessor);
}

function suc() {
    var sucessor = valor + 1;
    return (sucessor);
}


function App02() {
    return ( <
        div className = "App02" >
        <
        p > O antecessor deste número é: { ant() } < /p>  <
        p > O sucessor deste número é: { suc() } < /p> 

        <
        /div>
    );

}

export default App02;