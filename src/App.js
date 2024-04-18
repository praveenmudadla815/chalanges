import Counter from "./counter/Counter";
import CounterCustom from "./counter/customHookforCounter/CounterCustom";
import InputColor from "./inputcolorchange/InputColor";

function App() {
  return (
    <div className="App">
      <Counter />
      <CounterCustom />
      <div>
        <InputColor />
      </div>
    </div>
  );
}

export default App;
