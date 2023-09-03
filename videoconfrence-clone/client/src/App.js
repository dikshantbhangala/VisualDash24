import {Routes,Route} from 'react-router-dom'
import "./App.css";
import Lobbyscreen from "./screens/lobby";
function App() {
  return (
    <div className="App">
  <Routes>

    <Route path='/' element={<Lobbyscreen />} />
  </Routes>
    </div>
  );
}
export default App;
