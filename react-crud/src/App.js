import "./App.css";
import Hello from "./Hello.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/myCharacter.png" alt="My Character" />
        <Hello />
        <p>This is a React project created for assignment purposes.</p>
      </header>
      <section className="App-content">
        <p>@csee_dhh</p>
      </section>
    </div>
  );
}

export default App;
