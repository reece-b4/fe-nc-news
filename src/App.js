import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import { UserContext } from './contexts/User.Context';
import {Header, ArticlesDisplay, Navbar, ArticlePage, ErrorPage} from './components/components.index'


function App() {
  const [user, setUser] = useState('jessjelly')

  return (
    <UserContext.Provider value={{user, setUser}}>
    <Router>
    <div className="App">
      <Header />
      <Navbar />
    <Routes>
    <Route path='/' element={<ArticlesDisplay />}/>
    <Route path='/topic/:topic' element={<ArticlesDisplay />}/>
    <Route path='/topic/:topic/article/:article_id' element={<ArticlePage />}/>
    <Route path='*' element={<ErrorPage />}/>
    </Routes>
    </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
