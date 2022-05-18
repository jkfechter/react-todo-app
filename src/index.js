import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Routes,
  Route
 } from 'react-router-dom';
import TodoContainer from './functionBased/components/TodoContainer';

import "./functionBased/App.css"
import NotMatch from './functionBased/pages/NotMatch';
import About from './functionBased/pages/About';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<TodoContainer />}></Route>
      <Route path='*' element={<NotMatch />}></Route>
      <Route path='/functionBased/pages/About' element={<About />}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
