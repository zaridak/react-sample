import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { List } from 'antd';

import Card from 'react-bootstrap/Card';

const Receiver = ({ payload }) => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (payload.topic) {
      setMessages(messages => [...messages, payload])
    }
  }, [payload])

  const renderListItem = (item) => (
    <List.Item>
        {item.message}
    </List.Item>
  )

  // return (
  //   <>
    
  //   <Card>
  //     <Card.Header>Messages</Card.Header>
  //     <Card.Body>
  //       <div className='row'>
  //         <Form>
  //           <Form.Group  controlId="Receiver.ControlTextarea1">
  //             <Form.Control as="textarea" rows={5} />
  //           </Form.Group>
  //         </Form>     
  //       </div>
  //     </Card.Body>
  //   </Card>
  //   </>
  // )

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
