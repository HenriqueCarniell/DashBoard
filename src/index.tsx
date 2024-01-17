import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RightContainer from './components/right/rightcontainer';

//Provider React
import { Provider } from 'react-redux';
import store from './components/redux/store';
import Aside from './components/aside/aside';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
        <Routes>
          <Route path='/Produtos' element={<RightContainer />}></Route>
          <Route path='/' element={<Aside />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
