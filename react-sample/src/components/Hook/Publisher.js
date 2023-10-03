import { useContext } from 'react';
import { QosOption } from './index'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react'

const Publisher = ({payloadFromPublisher, publish, sendMsgClicked, userConnected }) => {
  
  const qosOptions = useContext(QosOption);
  let recipients = [
    {value: 'All', name: 'All' },
    {value: {userConnected}, name: {userConnected}}
  ];

  const [userDropDownValue,setUserDropDownValue] = useState('All');
  const [msgToSend, setMsgToSend] = useState('');
  const [sendBtnDisable,setSendBtnDisable] = useState(true);


  // topic, QoS for publishing message
  const record = {
    topic: 'testtopic/react',
    qos: 0,
  };


  function userSelectionChanged(event) {
    setUserDropDownValue(event.target.value)
  }  

  // get the value of the message on focus out
  function msgToSendTextChanges(event){
    setMsgToSend(event.target.value)
  }

  // disable or enable send button depending on input, on change for instant feedback of the button state
  function handleSendButtonDisabled(event){
    setSendBtnDisable(event.target.value == null || event.target.value.length == 0)
  }

  // send the payload to parent component
  const createPayLoadToSend = () =>{
    var date = new Date()
    let time = date.getHours() + ":" + (date.getMinutes() < 10 ? '0'  + date.getMinutes()  : date.getMinutes() )
    let strMsg = time + ' [' + userConnected + '] : ' + msgToSend;
    
    let jsonPayload ={
      "topic": userDropDownValue == 'All' ? 'topic/chatserver101/public' : 'topic/chatserver101/priv/'+userDropDownValue,
      "qos":0, // default received at most once : The packet is sent, and that's it. There is no validation about whether it has been received.
      "payload":  strMsg,
      "date":time //redundant
    }
    sendMsgClicked(jsonPayload);
  }

  const PublishForm = (

    <div className='row'>

      <div className='col-sm-6'>
        <InputGroup>
          <Form.Control type="text" aria-label="default" onBlur={msgToSendTextChanges} onChange={handleSendButtonDisabled} />
        </InputGroup>
      </div>

      <div className='col-sm-6'>
        {/* todo map the list recipients  */}
        <Form.Select onChange={userSelectionChanged} value ={userDropDownValue}>
          <option value={'All'}>{'All'}</option>
          <option value={userConnected}>{userConnected}</option>
        </Form.Select>
        <br></br>
        <div className='col-sm-3'>
          <Button disabled={sendBtnDisable} onClick={createPayLoadToSend} variant="primary">Send to {userDropDownValue}</Button>{' '}
        </div>
      </div>      

    </div>
  )

  return (
    <Card>
      <Card.Header>
        Send Messages
      </Card.Header>
      <Card.Body>
        {PublishForm}
      </Card.Body>
    </Card>
  );
}

export default Publisher;