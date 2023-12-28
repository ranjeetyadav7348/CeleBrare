
import './App.css';
import { Provider } from 'react-redux';
import Home from './Components/Home';
import  store  from './store';

function App() {
  return (
    <Provider store={store}>
    <Home/>
  </Provider>

  );
}

export default App;
