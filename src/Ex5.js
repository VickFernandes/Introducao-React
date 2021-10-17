import './App.css';

var a = parseInt(prompt("digite um numero:"));

function teste() {
    return (a - 1);
}

function App() {
    return ( <
        div className = "App" >
        <
        p > O antecessor deste número é: { teste() } < /p> 

        <
        /div>
    );

}

export default App;