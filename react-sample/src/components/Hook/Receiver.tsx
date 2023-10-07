import { useEffect, useState } from 'react';
import { List } from 'antd';
import { AiFillLock } from "react-icons/ai" 
import Card from 'react-bootstrap/Card';
import { PayLoadMessageModel } from '../../models/payload-message-data-model'
import { MessagePartsModel } from '../../models/message-parts-model';


const Receiver = ({ payload }) => {
  const [messages, setMessages] = useState<any[]>([])

  useEffect(() => {
    if (payload.topic) {
      console.log('Receiver useEffect')      
      setMessages(messages => [...messages, payload])
    }
  }, [payload])

  function getConstructedPayloadMsgPartsByPayloadModel(model:PayLoadMessageModel):MessagePartsModel {
    let ret:MessagePartsModel = {firstPart:"",secondPart:""}
    if(model){
      ret.firstPart = model.date + ' [ ' + model.sender + ' ] : ';
      ret.secondPart = model.message
    }
    return ret;
  }

  function getIfMsgIsPrivateByPayloadModel(model:PayLoadMessageModel):boolean {
    return model != null && model.isPrivate;
  }

  function renderListItem (item) {
    if(item){
      let data:MessagePartsModel = getConstructedPayloadMsgPartsByPayloadModel(JSON.parse(item.message))
      if(getIfMsgIsPrivateByPayloadModel(JSON.parse(item.message))){
        return (
          <List.Item>
           {data.firstPart}
           <AiFillLock/>
           {data.secondPart}
          </List.Item>
        )
      }
      else {
        return (
          <List.Item>
            {data.firstPart}
            {data.secondPart}
            {/* {item.message} */}
          </List.Item>
        )
      }
    }
    
  }

  return (
    <Card>
      <Card.Header>
        Messages
      </Card.Header>
      <Card.Body>
        <List
          size="small"
          // bordered
          dataSource={messages}
          renderItem={renderListItem}
          />
        </Card.Body>
    </Card>
  );
}

export default Receiver;
