import { useState } from 'react';
import './App.css';
import { Connection } from  './components/Connection';
import { ConnectionData } from './models/connection-data-model';

function App() {

  let recievedData: ConnectionData = {};

  const getConnectionData = (connectionData:ConnectionData) =>{
    recievedData = connectionData;
  }

  return (
    <div className="App">
      <Connection sentConnectionData={getConnectionData}></Connection>
    </div>
  );
}

export default App;
