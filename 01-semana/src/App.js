import React from 'react';
import './App.css';
import { Card } from './components/ui/Card';

function App() {

  const user = {
    id: 123,
    name: 'Jenny',
    role: 'Content Strategy'    
  };

  return (
    <>
     <Card title={ user.name } subTitle={ user.role } />     
    </>
  );
}

export default App;