import logo from './logo.svg';
import './App.css';
import HELLO from './myComponents/HELLO.js';
import Welcome from './myComponents/Welcome';


function App() {
  return (
    <div className="App">

      <HELLO name="Mamun" age="28"></HELLO>
      <HELLO name="Abdullah" age="27"></HELLO>
      <HELLO name="Shuvo" age="26"></HELLO>
      <HELLO name="Anay" age="25"></HELLO>

      <Welcome name ='class 1' ></Welcome>
      <Welcome name ='class 2'></Welcome>
      <Welcome name ='class 3'></Welcome>
      <Welcome name ='class 4'></Welcome>

    </div>
  );
}

export default App;
