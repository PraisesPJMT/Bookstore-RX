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
  <Router path="/">
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<BookPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </main>
  </Router>
);

export default App;
