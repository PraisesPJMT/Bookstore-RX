import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import BookPage from './pages/BookPage';
import CategoriesPage from './pages/CategoriesPage';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<BookPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
    </Routes>
  </Router>
);

export default App;
