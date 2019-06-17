import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';

import CustomLayout from './containers/Layout';

function App() {
  return (
    <Router>  
      <CustomLayout>
        <BaseRouter />
      </CustomLayout>
    </Router>
  );
}

export default App;
