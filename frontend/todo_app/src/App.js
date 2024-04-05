import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



import './App.css';
import Header from './components/Head'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
          
            <Route path="/" element={<NotesListPage />} />        
            <Route path="/nota/:id" element={<NotePage />} />
            
            {/* Agrega más rutas aquí */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
