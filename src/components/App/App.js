import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header containerClasses="app__container"/>
      <Main  containerClasses="app__container"/>
    </div>
  );
}

export default App;
