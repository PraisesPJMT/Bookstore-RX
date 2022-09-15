import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import BookPage from './pages/BookPage';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<BookPage />} />
    </Routes>
  </Router>
);

export default App;
