import { useState } from 'react';
import './App.css';
import { Connection } from  './components/Connection';
import { ConnectionData } from './models/connection-data-model';
// import {HookMqtt} from './components/Hook/index'
import HookMqtt from "./components/Hook/index"

function App() {

  const [connectPressed,setConnectPressed] = useState(false);
  const [connectionData,setConnectionData] = useState<ConnectionData>({
    userName:"",
    host:"",
    port:"",
    clientId:""  
  });

  const getConnectionData = (connectionDetailsInput:ConnectionData) =>{
    let inputData : ConnectionData = {
      userName: connectionDetailsInput.userName != null && connectionDetailsInput.userName != undefined ? connectionDetailsInput.userName : connectionData.userName,
      port: connectionDetailsInput.port != null && connectionDetailsInput.port != undefined ? connectionDetailsInput.port : connectionData.port,
      host: connectionDetailsInput.host != null && connectionDetailsInput.host != undefined ? connectionDetailsInput.host : connectionData.host,
      clientId: connectionDetailsInput.clientId != null && connectionDetailsInput.clientId != undefined ? connectionDetailsInput.clientId : 'client_' + Math.random().toString(16).substring(2, 8),
    }
    //todo delete
    // inputData.host= 'broker.emqx.io'
    // inputData.port = '8083'
    setConnectionData(inputData);
    setConnectPressed(true)
  }

  function getChatDetails(){
    if(connectPressed){
      return (
        <HookMqtt connectionDataDetails={connectionData}  ></HookMqtt>
      )
    }
  }

  return (
    <div>
      <div className="App">
        <Connection sentConnectionData={getConnectionData}></Connection>
        {getChatDetails()}
      </div>
    </div>
    
  );
}

export default App;
