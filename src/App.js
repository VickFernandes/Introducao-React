import './App.css';

var a = parseInt(prompt("digite um numero:"));
var b = parseInt(prompt("digite um segundo numero:"));

function teste() {
    return (a + b);
}

function App() {
    return ( <
        div className = "App" >
        <
        p > A soma desses números é de: { teste() } < /p> 

        <
        /div>
    );

}

export default App;