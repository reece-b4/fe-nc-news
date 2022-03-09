import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Header, ArticleCardList, Navbar, ArticlePage} from './components/components.index'


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Navbar />
    <Routes>
    <Route path='/' element={<ArticleCardList />}/>
    <Route path='/topic/:topic' element={<ArticleCardList />}/>
    <Route path='/topic/:topic/article/:article_id' element={<ArticlePage />}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
