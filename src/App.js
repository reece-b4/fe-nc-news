import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Header, ArticleCardList, Navbar} from './components/components.index'


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Navbar />
    <Routes>
    <Route path='/' element={<ArticleCardList />}/>
    <Route path='/topic/:topic' element={<ArticleCardList />}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
