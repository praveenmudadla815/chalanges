import FetchMethod from "./UsingFetchMethod/FetchMethod";
import Counter from "./counter/Counter";
import CounterCustom from "./counter/customHookforCounter/CounterCustom";
import InputColor from "./inputcolorchange/InputColor";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <CounterCustom /> */}
      <div>
        {/* <InputColor /> */}
        <FetchMethod />
      </div>
    </div>
  );
}

export default App;
