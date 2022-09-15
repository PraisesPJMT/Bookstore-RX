import {
  BrowserRouter as Router,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';

const App = () => (
  <Router>
    <Header />
  </Router>
);

export default App;
